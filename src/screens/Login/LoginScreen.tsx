import AsyncStorage from "@react-native-async-storage/async-storage";
import { CommonActions, RouteProp, useIsFocused, useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import {
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as Animatable from "react-native-animatable";
import Colors from "../../lib/Colors";
import styles from "./style";
import { useTranslation } from "react-i18next";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigators/root";
import themeContext from "../../config/theme/themeContext";

type LoginScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Login">;
  route: RouteProp<RootStackParamList, "Login">;
};

function LoginScreen ( {navigation, route}: LoginScreenProps): JSX.Element {
  //States de Controle
  const [t, i18n] = useTranslation("global")
  const [languagePreference, setLanguagePreference] = useState<string | null>(
    null
  );

  //States de armazenamento de dados do usuário
  const [userName, setUserName] = useState<string | null>("a")
  const [password, setPassword] = useState<string | null>("a")

  const isFocused = useIsFocused();
  
  const theme = useContext(themeContext) as any

  const initialSetUp = async () => {
    try {
      const languageStored = await AsyncStorage.getItem("language");

      if (languageStored) {
        const parsedLanguage = JSON.parse(languageStored);
        setLanguagePreference(parsedLanguage);
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (isFocused) {
      initialSetUp();
    }
    initialSetUp();
  }, [isFocused, languagePreference]);

  const userLogIn = async () => {
    try {
      navigation.replace("AuthNavigator");
    } catch (error: any) {
      console.log(error.message);
    }
  }

  return (
    <SafeAreaView style={[styles.screenContainer, {backgroundColor: theme.background}]}>
      <View style={styles.inputContainer}>
        <Animatable.View animation={"fadeInRight"}>
          <Text style={[styles.title, {color: theme.text}]}>Movie Shelf</Text>
        </Animatable.View>
        <Animatable.View
          style={[styles.inputView, {borderBottomColor: theme.text,}]}
          animation={"fadeInDown"}
          delay={400}
        >
          <TextInput placeholder={t("login.user.message")} style={[styles.input, {color: theme.color}]} placeholderTextColor={theme.placeholder}/>
        </Animatable.View>
        <Animatable.View
          style={[styles.inputView, {borderBottomColor: theme.text,}]}
          animation={"fadeInLeft"}
          delay={800}
        >
          <TextInput placeholder={t("login.password.message")} style={styles.input} placeholderTextColor={theme.placeholder}/>
        </Animatable.View>
        <Animatable.View
          style={[styles.buttonView, {borderColor: theme.text}]}
          animation={"fadeInRight"}
          delay={1200}
        >
          <TouchableOpacity onPress={userLogIn}>
            <Text style={[styles.buttonText]}>{t("login.loginButton.message")}</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
      <View style={styles.forgotPassContainer}>
        <Animatable.View
          style={{ flexDirection: "row" }}
          animation={"fadeInUp"}
          delay={1600}
        >
          <Text style={[styles.forgotPassText, {color: theme.text}]}>
            {t("login.forgotPassMessage.message")}
          </Text>
          <TouchableOpacity>
            <Text style={[styles.forgotPassText, { color: theme.accentDark }]}>
              {" "}
              {t("login.forgotPassButton.message")}
            </Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

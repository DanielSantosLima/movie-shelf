import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as Animatable from "react-native-animatable";
import Colors from "../../lib/Colors";
import getScreenContent from "../../lib/functions/getscreenContent";
import styles from "./style";

const LoginScreen = () => {
  const [languagePreference, setLanguagePreference] = useState<string | null>(
    null
  );
  const [content, setContent] = useState<any | null>(null);

  const isFocused = useIsFocused();

  const initialSetUp = async () => {
    try {
      const languageStored = await AsyncStorage.getItem("language");

      if (languageStored) {
        const parsedLanguage = JSON.parse(languageStored);
        setLanguagePreference(parsedLanguage);

        getScreenContent(parsedLanguage, "loginscreen");
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

  return (
    <SafeAreaView style={styles.screenContainer}>
      <View style={styles.inputContainer}>
        <Animatable.View animation={"fadeInRight"}>
          <Text style={styles.title}>Movie Shelf</Text>
        </Animatable.View>
        <Animatable.View
          style={styles.inputView}
          animation={"fadeInDown"}
          delay={400}
        >
          <TextInput placeholder="Login" style={styles.input} />
        </Animatable.View>
        <Animatable.View
          style={styles.inputView}
          animation={"fadeInLeft"}
          delay={800}
        >
          <TextInput placeholder="Senha" style={styles.input} />
        </Animatable.View>
        <Animatable.View
          style={[styles.buttonView, { backgroundColor: Colors.background }]}
          animation={"fadeInRight"}
          delay={1200}
        >
          <TouchableOpacity>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
      <View style={styles.forgotPassContainer}>
        <Animatable.View
          style={{ flexDirection: "row" }}
          animation={"fadeInUp"}
          delay={1600}
        >
          <Text style={styles.forgotPassText}>
            Forgot Your Password??? Click
          </Text>
          <TouchableOpacity>
            <Text style={[styles.forgotPassText, { color: "blue" }]}>
              {" "}
              Here!!!
            </Text>
          </TouchableOpacity>
        </Animatable.View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;

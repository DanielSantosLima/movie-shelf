import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useContext, useState } from "react";
import LanguageButtons from "../components/LanguageButtons";
import LoginScreen from "../screens/Login/LoginScreen";
import AuthNavigator from "./AuthNavigator";
import { RootStackParamList } from "./root";
import { Switch, Text, View } from "react-native";
const Stack = createNativeStackNavigator<RootStackParamList>();

import { EventRegister } from "react-native-event-listeners";
import themeContext from "../config/theme/themeContext";

const UnauthNavigator = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  const theme = useContext(themeContext) as any
  

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerRight: () => (
            <>
            <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
              <Text style={{color: theme.text}}>{darkMode ? "Dark Mode ON" : "Dark Mode OFF"}</Text>
              <Switch value={darkMode} onValueChange={(value) => {
                setDarkMode(value)
                EventRegister.emit("changeTheme", value)
              }} />
            </View>
              <LanguageButtons />
            </>
          ),
        }}
      />
      <Stack.Screen 
        name="AuthNavigator"
        component={AuthNavigator}
        options={{
          headerRight: () => <LanguageButtons />,
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

export default UnauthNavigator;

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LanguageButtons from "../components/LanguageButtons";
import HomeScreen from "../screens/Home/HomeScreen";
import { Switch } from "react-native";
const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerRight: () => (
            <>
              <Switch/>
              <LanguageButtons />
            </>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;

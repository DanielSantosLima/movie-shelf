import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import LanguageButtons from "../components/LanguageButtons";
import LoginScreen from "../screens/Login/LoginScreen";
const Stack = createNativeStackNavigator();

const UnauthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerRight: () => <LanguageButtons />,
        }}
      />
    </Stack.Navigator>
  );
};

export default UnauthNavigator;

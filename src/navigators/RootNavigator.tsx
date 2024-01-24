import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import AuthNavigator from "./AuthNavigator";
import UnauthNavigator from "./UnauthNavigator";

const RootNavigator = () => {
  const [isUserLogged, setIsUserLogged] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchDataAndSetup = async () => {
      try {
        const user = await AsyncStorage.getItem("user");
        const parsedUser = user ? JSON.parse(user) : null;
        setIsUserLogged(parsedUser?.id ? true : false);
      } catch (error: any) {
        console.error("Error in fetchDataAndSetup:", error.message);
      }
    };

    fetchDataAndSetup();
  }, []);

  return (
    <NavigationContainer>
      {isUserLogged ? <AuthNavigator /> : <UnauthNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;

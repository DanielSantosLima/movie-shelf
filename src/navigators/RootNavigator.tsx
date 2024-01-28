import AsyncStorage from "@react-native-async-storage/async-storage";
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import AuthNavigator from "./AuthNavigator";
import UnauthNavigator from "./UnauthNavigator";
import { EventRegister } from "react-native-event-listeners";

const RootNavigator = () => {
  const [isUserLogged, setIsUserLogged] = useState<boolean | null>(null);
  const [darkMode, setDarkMode] = useState<boolean>(false)
  

  useEffect(() => {
    
  }, [])

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

    let eventListener = EventRegister.addEventListener("changeTheme", (data) => {
      setDarkMode(data)
      return () => {
        EventRegister.removeEventListener(eventListener.toString())
      }
    })

    fetchDataAndSetup();
  }, []);

  return (
    <NavigationContainer theme={darkMode === true ? DarkTheme : DefaultTheme}>
      {isUserLogged ? <AuthNavigator /> : <UnauthNavigator />}
    </NavigationContainer>
  );
};

export default RootNavigator;

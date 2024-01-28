import { StyleSheet } from "react-native";
import RootNavigator from "./src/navigators/RootNavigator";
import i18next from "i18next";
import themeContext from "./src/config/theme/themeContext";
import theme from "./src/config/theme/theme";
import global_en from './src/translations/en/login/global.json'
import global_pt from './src/translations/pt/login/global.json'
import { I18nextProvider } from "react-i18next";
import { useEffect, useState } from "react";
import { EventRegister } from "react-native-event-listeners";

i18next.init({
  compatibilityJSON: 'v3',
  interpolation: {escapeValue: true},
  lng: "en",
  resources: {
    en: {
      global: global_en
    },
    pt: {
      global: global_pt
    }
  }
})

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  useEffect(() => {
    let eventListener = EventRegister.addEventListener("changeTheme", (data) => {
      setDarkMode(data)
      return () => {
        EventRegister.removeEventListener(eventListener.toString())
      }
    })
  }, [])

  return (
    <themeContext.Provider value={darkMode === true ? theme.dark : theme.light}>
      <I18nextProvider i18n={i18next}>
        <RootNavigator />
      </I18nextProvider>
    </themeContext.Provider>
  )
}



import AsyncStorage from "@react-native-async-storage/async-storage";
import i18 from "i18next"

const saveLanguagePreference = async (language: string) => {
  try {
    i18.changeLanguage(language)

    const stringfyLanguage = await JSON.stringify(language);

    await AsyncStorage.setItem("language", stringfyLanguage);
  } catch (error: any) {
    console.log(error.message);
  }
};

export default saveLanguagePreference;

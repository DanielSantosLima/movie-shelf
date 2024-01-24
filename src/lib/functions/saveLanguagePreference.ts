import AsyncStorage from "@react-native-async-storage/async-storage";

const saveLanguagePreference = async (language: string) => {
  try {
    const stringfyLanguage = await JSON.stringify(language);

    await AsyncStorage.setItem("language", stringfyLanguage);
  } catch (error: any) {
    console.log(error.message);
  }
};

export default saveLanguagePreference;

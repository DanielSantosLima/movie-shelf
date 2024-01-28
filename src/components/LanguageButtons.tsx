import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import saveLanguagePreference from "../lib/functions/saveLanguagePreference";


const LanguageButtons = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={() => saveLanguagePreference("en")}>
        <Image source={require("../../assets/us.png")} style={styles.image} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => saveLanguagePreference("pt")}>
        <Image source={require("../../assets/br.png")} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

export default LanguageButtons;

const styles = StyleSheet.create({
  image: { width: 40, height: 30, marginRight: 15 },
});

import { StyleSheet } from "react-native";
import Colors from "../../lib/Colors";

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 30,
    alignSelf: "center",
    marginBottom: "10%",
  },
  inputContainer: {
    marginVertical: "10%",
    marginHorizontal: "10%",
  },
  inputView: {
    marginVertical: "5%",
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    textAlign: "center",
  },
  input: {
    textAlign: "center",
    fontSize: 20,
  },
  buttonView: {
    alignSelf: "center",
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "#000",
    padding: 15,
    width: "40%",
    alignItems: "center",
    backgroundColor: Colors.background
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  forgotPassContainer: {
    alignItems: "center",
  },
  forgotPassText: {
    fontSize: 17,
  },
});

export default styles;

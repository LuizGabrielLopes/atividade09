import { View, Text, TextInput, StyleSheet, } from "react-native";
import Button from "./components/Button";

export default function Home() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Digite algo" />
      <Button text = "botão 1" />
      <Button text = "botão 2" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 40,
    marginLeft: 30,
  },
  input: {
    height: 40,
    width: 300,
    borderColor: "black",
    borderWidth: 1,
    marginTop: 30,
    padding: 10,
  },

  textRed: {
    color: "red",
    marginTop: 20,
    fontSize: 20,
  },
  textGreen: {
    color: "white", 
    marginTop: 20,
    fontSize: 20,
  },
});
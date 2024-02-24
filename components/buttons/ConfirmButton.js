import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function ConfirmButton(props) {
  const colors = props.colors ? props.colors : ["#0100D8", "#2222F4"];
  return (
    <TouchableOpacity onPress={props.onPress}>
      <LinearGradient style={styles.container} colors={[...colors]}>
        <Text style={styles.text}>{props.title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 50,
    backgroundColor: "#2768FF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    margin: 10,
    padding: 10,
    shadowColor: "black",
    shadowOpacity: 0.5,
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ConfirmButton;

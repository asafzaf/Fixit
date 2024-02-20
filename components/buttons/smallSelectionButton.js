import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function SmallSelectionButton(props) {
  const logo = props.logo ? (
    <Image style={{ height: 100, width: 100 }} source={props.logo} />
  ) : null;
  const colors = props.colors ? props.colors : ["#0100D8", "#0100D8"];
  return (
    <TouchableOpacity onPress={props.onPress}>
      <LinearGradient style={styles.container} colors={[...colors]}>
        <Text style={styles.text}>{props.title}</Text>
        {logo}
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
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

export default SmallSelectionButton;

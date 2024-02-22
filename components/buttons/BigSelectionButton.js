import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function BigSelectionButton(props) {
  const logo = props.logo ? (
    <Image style={{ height: 100, width: 100 }} source={props.logo} />
  ) : null;
  const colors = props.colors ? props.colors : ["#0100D8", "#0100D8"];
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <LinearGradient style={styles.container} colors={[...colors]}>
        <Text style={styles.text}>{props.title}</Text>
        {logo}
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 180,
    backgroundColor: "#2768FF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    margin: 10,
    elevation: 10,
    shadowColor: "black",
    shadowOpacity: 0.5,
  },
  text: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
});

export default BigSelectionButton;

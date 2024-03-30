import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function UrgencySelectionButton(props) {
  const clickHandler = (value) => {
    props.setUrgency(value);
  };
  const colors = props.colors ? props.colors : ["#0100D8", "#0100D8"];
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        clickHandler(props.value);
      }}
    >
      <LinearGradient style={styles.container} colors={[...colors]}>
        <Text style={styles.text}>{props.title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    margin: 5,
    elevation: 10,
    shadowColor: "black",
    shadowOpacity: 0.5,
  },
  text: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default UrgencySelectionButton;

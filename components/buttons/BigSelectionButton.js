import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function BigSelectionButton(props) {
  const logo = props.logo ? props.logo : null;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={props.onPress}
    >
      <LinearGradient style={styles.container} colors={[...props.colors]}>
        <Text style={styles.text}>{props.title}</Text>
        {logo && <Image style={{height:100,width:100}} source={logo} />}
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
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
    fontSize: 20,
  },
});

export default BigSelectionButton;

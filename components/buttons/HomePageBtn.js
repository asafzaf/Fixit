import { Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function HomePageBtn(props) {
  const logo = props.logo ? (
    <Image style={{ height: 70, width: 70 }} source={props.logo} />
  ) : null;
  const colors = props.colors ? props.colors : ["#2768FF", "#2768FF"];
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <LinearGradient style={styles.container} colors={[...colors]}>
        {logo}
        <Text style={styles.text}>{props.title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 100,
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
    borderRadius: 20,
    shadowColor: "black",
    shadowOpacity: 0.5,
  },
  text: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 20,
  },
});

export default HomePageBtn;

import { Pressable, View, Text } from "react-native";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  item: {
    margin: 10,
    width: 150,
    height: 120,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 20,
    shadowColor: "black",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: "center",
    color: "white",
  },
  title: {
    fontSize: 20,
    marginBottom: 5,
    fontWeight: "bold",
    color: "white",
  },
  btnPressed: {
    opacity: 0.5,
  },
});

function SpacesGrid({ name, description, color1, Data, navigation }) {
  function spaceHandler() {
    navigation.navigate("SpaceChooser");
  }
  return (
    <View>
      <Pressable
        style={({ pressed }) => [pressed ? styles.btnPressed : null]}
        onPress={spaceHandler}
      >
        <View style={[styles.item, { backgroundColor: color1 }]}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.text}>{description}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default SpacesGrid;

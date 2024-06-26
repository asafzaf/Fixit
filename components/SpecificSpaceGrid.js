import { Pressable, View, Text } from "react-native";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  item: {
    margin: 10,
    width: 150,
    height: 120,
    backgroundColor: "#164863",
    padding: 10,
    borderRadius: 10,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  title: {
    fontSize: 20,
    marginBottom: 5,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  btnPressed: {
    opacity: 0.5,
  },
});

function SpecificSpacesGrid({
  color1,
  navigation,
  spaceTypeId,
  spaceTypeName,
  spaceTypeNameHebrew,
  buildingId,
  buildingName,
  name,
  spaceId,
}) {
  function spaceHandler() {
    navigation.navigate("FaultChoose", {
      spaceName: name,
      spaceTypeId: spaceTypeId,
      spaceTypeName: spaceTypeName,
      spaceTypeNameHebrew: spaceTypeNameHebrew,
      buildingId: buildingId,
      buildingName: buildingName,
      spaceId: spaceId,
    });
  }
  return (
    <View>
      <Pressable
        style={({ pressed }) => [pressed ? styles.btnPressed : null]}
        onPress={spaceHandler}
      >
        <View style={[styles.item, { backgroundColor: color1 }]}>
          <Text style={styles.title}>{name}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default SpecificSpacesGrid;

import { Pressable, View, Text } from "react-native";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  item: {
    marginTop: 20,
    width: 300,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});

function MaintenancFaultGrid({ id, domain, faultTypeName, location, navigation }) {
  return (
    <View>
      <Pressable onPress={() =>{
        navigation.navigate("FaultItem", {faultId: id});
      }}>
        <View style={styles.item}>
          <Text style={styles.text}>{"ID: " + id}</Text>
          <Text style={styles.text}>{"Domain: " + domain}</Text>
          <Text style={styles.text}>{"Sub-Domain: " + faultTypeName}</Text>
          <Text style={styles.text}>{"Location: " + location}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MaintenancFaultGrid;

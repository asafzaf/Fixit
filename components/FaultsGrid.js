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
  btnPressed: {
    opacity: 0.5,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  text_container: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 5,
  },
  text_secondary: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

function FaultsGrid({
  id,
  domain,
  faultTypeName,
  location,
  status,
  navigation,
}) {
  return (
    <View>
      <Pressable
        style={({ pressed }) => [pressed ? styles.btnPressed : null]}
        onPress={() => {
          navigation.navigate("FaultItem", {
            faultId: id,
            faultStatus: status,
          });
        }}
      >
        <View style={styles.item}>
          <View style={styles.text_container}>
            <Text style={styles.text_secondary}>ID: </Text>
            <Text style={styles.text}>{id}</Text>
          </View>
          <View style={styles.text_container}>
            <Text style={styles.text_secondary}>Domain: </Text>
            <Text style={styles.text}>{domain}</Text>
          </View>
          <View style={styles.text_container}>
            <Text style={styles.text_secondary}>Fault: </Text>
            <Text style={styles.text}>{faultTypeName}</Text>
          </View>
          <View style={styles.text_container}>
            <Text style={styles.text_secondary}>Location: </Text>
            <Text style={styles.text}>{location}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default FaultsGrid;

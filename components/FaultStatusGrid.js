import { Pressable, View, Text } from "react-native";
import { StyleSheet } from "react-native";
import React from "react";

const pendingColor = "#690202";
const closedColor = "#024A01";
const inProgressColor = "#724502";

const styles = StyleSheet.create({
  item: {
    borderRadius: 10,
    backgroundColor: "white",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 70,
  },
  btnPressed: {
    opacity: 0.5,
  },
  text_container: {
    width: "60%",
    justifyContent: "center",
    paddingLeft: 10,
    padding: 5,
  },
  text_container_secondary: {
    display: "flex",
    flexDirection: "row",
    width: "60%",
    paddingTop: 5,
  },
  container: {
    // margin: 10,
    alignItems: "center",
    height: "10%",
  },
  status: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    height: "100%",
    width: "40%",
    justifyContent: "center",
    paddingRight: 10,
  },
  text: {
    padding: 2,
    fontSize: 14,
  },
  text_secondary: {
    padding: 2,
    fontSize: 14,
    fontWeight: "bold",
  },
  status_text: {
    padding: 10,
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    textAlign: "right",
  },
});

function FaultsGrid({ id, name, location, status, navigation }) {
  let color =
    status.toLowerCase() === "pending"
      ? pendingColor
      : status.toLowerCase() === "closed"
      ? closedColor
      : inProgressColor;

  return (
    // <View style={{ marginTop: 10, backgroundColor: "blue" }}>
    <Pressable
      // style={({ pressed }) => [pressed ? styles.btnPressed : null]}
      style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
      onPress={() => {
        navigation.navigate("FaultItem", {
          faultId: id,
          faultStatus: status,
        });
      }}
    >
      <View style={styles.container}>
        <View style={styles.item}>
          <View style={styles.text_container}>
            {/* <Text style={styles.text}>{id}</Text> */}
            <View style={styles.text_container_secondary}>
              <Text style={styles.text_secondary}>Fault:</Text>
              <Text style={styles.text}>{name}</Text>
            </View>
            <View style={styles.text_container_secondary}>
              <Text style={styles.text_secondary}>Location:</Text>
              <Text style={styles.text}>{location}</Text>
            </View>
          </View>
          <View style={[styles.status, { backgroundColor: color }]}>
            <Text style={styles.status_text}>{status}</Text>
          </View>
        </View>
      </View>
    </Pressable>
    // </View>
  );
}

export default FaultsGrid;

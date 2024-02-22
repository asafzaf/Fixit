import { Pressable, View, Text } from "react-native";
import { StyleSheet } from "react-native";

const pendingColor = "#690202";
const closedColor = "#024A01";
const inProgressColor = "#724502";

const styles = StyleSheet.create({
  item: {
    marginTop: 20,
    width: "70%",
    borderRadius: 10,
    backgroundColor: "white",
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    // shadowColor: "black",
    // shadowOffset: { width: -2, height: 4 },
    // shadowOpacity: 0.2,
    // shadowRadius: 2,
  },
  status: {
    // backgroundColor: color,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    height: "100%",
    width: "50%",
  },
  id: {
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  text: {
    margin: 10,
    fontSize: 12,
    // textAlign: "left",
  },
  status_text: {
    // margin: 10,
    padding: 10,
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    textAlign: "right",
  },
});

function FaultsGrid({ id, status }) {
  let color =
    status.toLowerCase() === "pending"
      ? pendingColor
      : status.toLowerCase() === "closed"
      ? closedColor
      : inProgressColor;

  console.log(color);
  console.log(status);
  return (
    <View>
      <Pressable>
        <View style={styles.item}>
          <View style={styles.id}>
            <Text style={styles.text}>{id}</Text>
          </View>
          <View style={[styles.status, { backgroundColor: color }]}>
            <Text style={styles.status_text}>{status}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default FaultsGrid;

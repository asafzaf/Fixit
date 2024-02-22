import { Pressable, View, Text } from "react-native";
import { StyleSheet } from "react-native";

const pendingColor = "#690202";
const closedColor = "#024A01";
const inProgressColor = "#724502";

const styles = StyleSheet.create({
  item: {
    marginTop: 20,
    width: "85%",
    borderRadius: 10,
    backgroundColor: "white",
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: "black",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  status: {
    backgroundColor: pendingColor,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    height: "100%",
    width: "50%",
  },
  text: {
    margin: 10,
    fontSize: 16,
  },
  status_text: {
    margin: 10,
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    textAlign: "right",
  },
});

function FaultsGrid({ id }) {
  return (
    <View>
      <Pressable>
        <View style={styles.item}>
          <View>
            <Text style={styles.text}>hey</Text>
          </View>
          <View style={styles.status}>
            <Text style={styles.status_text}>bfgny</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default FaultsGrid;

import { ScrollView, StyleSheet, Text, View } from "react-native";
import { styles } from "../../styles";
import TitleHeader from "../../components/headerTitle";

function ConfirmFaultScreen({ navigation, route }) {
  const buildingId = route.params.buildingId;
  const buildingName = route.params.buildingName;
  const data = route.params.data;
  const domainName = data.domain.name;
  const faultName = data.fault;
  const spaceId = route.params.spaceId;
  const spaceName = route.params.spaceName;

  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "flex-start" }}
    >
      <TitleHeader title={"Confirm Fault"}></TitleHeader>
      <Text
        style={{
          fontSize: 20,
          color: "black",
          fontWeight: "bold",
          marginTop: 20,
        }}
      >
        Fault Details
      </Text>
      <Text style={styles.text}>Domain: {domainName}</Text>
      <Text style={styles.text}>fault: {faultName}</Text>
      <Text style={styles.text}>buildintID: {buildingId}</Text>
      <Text style={styles.text}>buildingName: {buildingName}</Text>
      <Text style={styles.text}>spaceName: {spaceName}</Text>
    </View>
  );
}

export default ConfirmFaultScreen;

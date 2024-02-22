import { Button, StyleSheet, Text, View } from "react-native";
import TitleHeader from "../../components/headerTitle";

function StatusScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TitleHeader title={"Status"}></TitleHeader>
      <Button title="Go to Home" onPress={() => navigation.popToTop()} />
    </View>
  );
}

export default StatusScreen;

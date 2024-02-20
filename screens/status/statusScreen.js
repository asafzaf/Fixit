import { Button, StyleSheet, Text, View } from "react-native";

function StatusScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Status Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.popToTop()} />
    </View>
  );
}

export default StatusScreen;

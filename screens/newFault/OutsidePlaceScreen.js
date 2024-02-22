import { Button, StyleSheet, Text, View } from "react-native";

function OutsidePlaceScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>בחוץ</Text>
      <Button title="חזרה לתפריט ראשי" onPress={() => navigation.popToTop()} />
    </View>
  );
}

export default OutsidePlaceScreen;

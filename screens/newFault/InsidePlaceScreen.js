import { Button, StyleSheet, Text, View } from "react-native";

function InsidePlaceScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>בפנים</Text>
        <Button title="חזרה לתפריט ראשי" onPress={() => navigation.popToTop()} />
      </View>
    );
  }

export default InsidePlaceScreen;
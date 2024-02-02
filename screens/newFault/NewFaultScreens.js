import { Button, StyleSheet, Text, View } from "react-native";
import * as React from "react";
import BigSelectionButton from "../../components/buttons/BigSelectionButton";
import { styles } from "../../styles";
 

function NewFaultScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.boldText}>אנא בחר:</Text>
      <BigSelectionButton
        colors={["#C37E49", "#E19154"]}
        logo={require('../../assets/House-03-WF.png')}
        title="בפנים"
        onPress={() => navigation.push("Inside")}
      ></BigSelectionButton>
      <BigSelectionButton
        colors={["#63BD44","#7AE058"]}
        logo={require('../../assets/Tree-WF1.png')}
        title="בחוץ"
        onPress={() => navigation.push("Outside")}
      ></BigSelectionButton>
      <Button title="חזרה לתפריט ראשי" onPress={() => navigation.popToTop()} />
    </View>
  );
}

export default NewFaultScreen;

import { Button, StyleSheet, Text, View } from "react-native";
import * as React from "react";

function NewFaultScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>אנא בחר:</Text>
        <Button
          color="#FA0606"
          title="בפנים"
          onPress={() => navigation.push("Inside")}
        />
        <Button
          color="#060AFA"
          title="בחוץ"
          onPress={() => navigation.push("Outside")}
        />
        <Button title="חזרה לתפריט ראשי" onPress={() => navigation.popToTop()} />
      </View>
    );
  }
  
export default NewFaultScreen;
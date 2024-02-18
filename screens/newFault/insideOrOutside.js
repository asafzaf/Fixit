import { Button, StyleSheet, Text, View } from "react-native";
import * as React from "react";
import BigSelectionButton from "../../components/buttons/BigSelectionButton";
import { styles } from "../../styles";
import FixitHeader from "../../components/header";

function NewFaultScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <FixitHeader></FixitHeader>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={styles.small_title}>Where Am I ?</Text>
        <BigSelectionButton
          colors={["#0100D8", "#4A49FF"]}
          logo={require("../../assets/House-03-WF.png")}
          title="Inside"
          onPress={() => navigation.push("Inside")}
        ></BigSelectionButton>
        <BigSelectionButton
          colors={["#6416F8", "#9158FF"]}
          logo={require("../../assets/Tree-WF1.png")}
          title="Outside"
          onPress={() => navigation.push("Outside")}
        ></BigSelectionButton>
        <Button
          title="Back to Home Page"
          onPress={() => navigation.popToTop()}
        />
      </View>
    </View>
  );
}

export default NewFaultScreen;

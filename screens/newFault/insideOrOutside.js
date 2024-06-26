import { Button, ScrollView, Text, View } from "react-native";
import * as React from "react";
import BigSelectionButton from "../../components/buttons/BigSelectionButton";
import { styles } from "../../styles";
import TitleHeader from "../../components/headerTitle";

function NewFaultScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TitleHeader title={"Open New Fault"}></TitleHeader>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "flex-start",
          marginTop: 100,
        }}
      >
        <Text style={styles.small_title}>Where are you ?</Text>
        <ScrollView>
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
        </ScrollView>
        <View style={{ marginBottom: 50 }}>
          <Button
            title="Back to Home Page"
            onPress={() => navigation.popToTop()}
          />
        </View>
      </View>
    </View>
  );
}

export default NewFaultScreen;

import React, { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
// import { styles } from "../../styles";
import TitleHeader from "../../components/headerTitle";
import UrgencyLevelsButtons from "../../components/UI/UrgencyLevelsButtons";
import { Keyboard } from "react-native";
import { postFault } from "../../utilities/http";

function ConfirmFaultScreen({ navigation, route }) {
  const buildingId = route.params.buildingId;
  const buildingName = route.params.buildingName;
  const data = route.params.data;
  const spaceTypeId = route.params.spaceTypeId;
  const spaceTypeName = route.params.spaceTypeName;
  const domainName = route.params.domain.name;
  const domainId = route.params.domain._id;
  const faultName = route.params.fault.name;
  const faultId = route.params.fault._id;
  const spaceNumber = route.params.spaceId;
  const spaceName = route.params.spaceName;

  const [description, setDescription] = useState("");
  const [urgency, setUrgency] = useState("");

  const openFault = async () => {
    const fault = {
      domainId,
      domainName,
      faultId,
      faultName,
      buildingId,
      buildingName,
      spaceTypeId,
      spaceTypeName,
      description,
      urgency,
      spaceName,
      spaceNumber,
    };
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <TitleHeader title={"Confirm Fault"}></TitleHeader>
        <Text style={styles.sectionTitle}>Fault Details</Text>
        <Text style={styles.text}>Domain: {domainName}</Text>
        <Text style={styles.text}>Fault: {faultName}</Text>
        <Text style={styles.text}>Building Name: {buildingName}</Text>
        <Text style={styles.text}>Space Type Name: {spaceTypeName}</Text>
        <Text style={styles.text}>Space Name: {spaceName}</Text>
        <Text style={styles.text}>Urgency: {urgency}</Text>
        <View style={{ marginTop: 20 }}>
          <Text style={styles.sectionTitle}>Fault Description</Text>
          <TextInput
            style={{
              height: 100,
              width: 300,
              borderColor: "gray",
              borderWidth: 1,
              borderRadius: 10,
              padding: 10,
            }}
            onChangeText={(text) => {
              setDescription(text);
            }}
            enterKeyHint="next"
            enablesReturnKeyAutomatically={true}
            multiline
            placeholder="Enter a description of the fault"
            onSubmitEditing={() => {
              Keyboard.dismiss();
            }}
          />
        </View>
        <UrgencyLevelsButtons setUrgency={setUrgency}></UrgencyLevelsButtons>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Open Fault</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    color: "black",
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: "black",
    marginBottom: 5,
  },
  textButton: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    justifyContent: "center",
  },
  button: {
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "blue",
    color: "white",
    width: 200,
    height: 50,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  },
});

export default ConfirmFaultScreen;

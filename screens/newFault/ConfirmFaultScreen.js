import React, { useEffect, useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
  Pressable,
} from "react-native";
// import { styles } from "../../styles";
import TitleHeader from "../../components/headerTitle";
import UrgencyLevelsButtons from "../../components/UI/UrgencyLevelsButtons";
import { Keyboard } from "react-native";
import { postFault } from "../../utilities/http";

function ConfirmFaultScreen({ navigation, route }) {
  const domainId = route.params.domain._id;
  const domainNameEng = route.params.domain.name;
  const domainNameHeb = route.params.domain.name_hebrew;
  const faultTypeId = route.params.fault.id;
  const faultTypeNameEng = route.params.fault.name;
  const faultTypeNameHeb = route.params.fault.name_hebrew;
  const buildingId = route.params.buildingId;
  const buildingName = route.params.buildingName;
  const spaceTypeId = route.params.spaceTypeId;
  const spaceTypeNameEng = route.params.spaceTypeName;
  const spaceTypeNameHeb = route.params.spaceTypeNameHebrew;
  const spaceNumber = route.params.spaceId;
  const spaceName = route.params.spaceName;
  const reportByUser = "5c9f3e3e3588da6b7dd3f02d";

  const [description, setDescription] = useState("");
  const [urgency, setUrgency] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [result, setResult] = useState("");

  const openFault = async () => {
    const fault = {
      domainId,
      domainNameEng,
      domainNameHeb,
      faultTypeId,
      faultTypeNameEng,
      faultTypeNameHeb,
      buildingId,
      buildingName,
      spaceTypeId,
      spaceTypeNameEng,
      spaceTypeNameHeb,
      spaceName,
      spaceNumber,
      reportByUser,
      description,
      urgency,
    };
    const result = await postFault(fault);
    setResult(JSON.parse(result));
  };

  useEffect(() => {
    if (result) {
      setModalVisible(true);
    }
  }, [result]);

  return (
    <View style={ModalStyles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={ModalStyles.centeredView}>
          <View style={ModalStyles.modalView}>
            <Text style={ModalStyles.modalText}>{result.status === "success" ? ("Fault Created Successfully!"): ("Error Creating New Fault")}</Text>
            <Pressable
              style={[ModalStyles.button, ModalStyles.buttonClose]}
              onPress={() => 
                navigation.navigate("Home")
              }
            >
              <Text style={ModalStyles.textStyle}>Go Back</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <ScrollView>
        <TitleHeader title={"Confirm Fault"}></TitleHeader>
        <Text style={styles.sectionTitle}>Fault Details</Text>
        <Text style={styles.text}>Domain: {domainNameEng}</Text>
        <Text style={styles.text}>Fault: {faultTypeNameEng}</Text>
        <Text style={styles.text}>Building Name: {buildingName}</Text>
        <Text style={styles.text}>Space Type Name: {spaceTypeNameEng}</Text>
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
        <TouchableOpacity style={styles.button} onPress={openFault}>
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

const ModalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 55,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default ConfirmFaultScreen;

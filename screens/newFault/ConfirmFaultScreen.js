import React, { useEffect, useState, useContext } from "react";
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
import TitleHeader from "../../components/headerTitle";
// import UrgencyLevelsButtons from "../../components/UI/UrgencyLevelsButtons";
import { Keyboard } from "react-native";
import { postFault } from "../../utilities/http";
import Slider from "@react-native-community/slider";
import { AuthContext } from "../../store/auth-context";
import ImagePicker from "../../components/ImagePick/ImagePicker";

function ConfirmFaultScreen({ navigation, route }) {
  // console.log(route.params);
  const authCtx = useContext(AuthContext);
  const domainId = route.params.domain?._id ? route.params.domain._id : "";
  const domainNameEng = route.params.domain?.name
    ? route.params.domain.name
    : "";
  const domainNameHeb = route.params.domain?.name_hebrew
    ? route.params.domain.name_hebrew
    : "";
  const faultTypeId = route.params.fault?.id ? route.params.fault.id : "";
  const faultTypeNameEng = route.params.fault?.name
    ? route.params.fault.name
    : "";
  const faultTypeNameHeb = route.params.fault?.name_hebrew
    ? route.params.fault.name_hebrew
    : "";
  const buildingId = route.params?.buildingId ? route.params.buildingId : "";
  const buildingName = route.params?.buildingName
    ? route.params.buildingName
    : "";
  const spaceTypeId = route.params.spaceTypeId ? route.params.spaceTypeId : "";
  const spaceTypeNameEng = route.params.spaceTypeName
    ? route.params.spaceTypeName
    : "";
  const spaceTypeNameHeb = route.params.spaceTypeNameHebrew
    ? route.params.spaceTypeNameHebrew
    : "";
  const spaceNumber = route.params.spaceId ? route.params.spaceId : "";
  const spaceName = route.params.spaceName ? route.params.spaceName : "";
  const reportByUser = authCtx.userId;

  const outSide = route.params.outSide ? route.params.outSide : false;
  const outSideId = route.params.outSideId ? route.params.outSideId : "";
  const outSideName = route.params.outSideName ? route.params.outSideName : "";

  // console.log("outside", outSide);
  // console.log("outsideId", outSideId);
  // console.log("outsideName", outSideName);

  const [description, setDescription] = useState("");
  const [urgency, setUrgency] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [result, setResult] = useState("");
  const [pickedPhoto, setPickedPhoto] = useState(null);

  const imageTakenHandler = (imagePath) => {
    setPickedPhoto(imagePath);
  };

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
      outSide,
      outSideId,
      outSideName,
      spaceTypeId,
      spaceTypeNameEng,
      spaceTypeNameHeb,
      spaceNumber,
      spaceName,
      description,
      urgency,
      reportByUser,
      photo: pickedPhoto,
    };
    console.log(JSON.stringify(fault));
    try {
      const res = await postFault(fault);
      setResult(JSON.parse(res));
    } catch (error) {
      console.error(`Colud not create fault ${error}`);
    }
  };

  useEffect(() => {
    if (result) {
      setModalVisible(true);
    }
  }, [result]);

  const displayUrgency = () => {
    if (urgency === 1) {
      return "Lowest";
    } else if (urgency === 2) {
      return "Low";
    } else if (urgency === 3) {
      return "Medium";
    } else if (urgency === 4) {
      return "High";
    } else if (urgency === 5) {
      return "Critical";
    }
  };

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
            <Text style={ModalStyles.modalText}>
              {result.status === "success"
                ? "Fault Created Successfully!"
                : "Error Creating New Fault"}
            </Text>
            <Pressable
              style={[ModalStyles.button, ModalStyles.buttonClose]}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={ModalStyles.textStyle}>Go Back</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View>
        <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
          <TitleHeader title={"Confirm Fault"}></TitleHeader>
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={styles.sectionTitle}>Fault Details</Text>
              <View
                style={{
                  width: 300,
                  borderRadius: 10,
                  padding: 10,
                  paddingTop: 10,
                  backgroundColor: "white",
                  fontSize: 16,
                }}
              >
                <View style={styles.text_container_secondary}>
                  <Text style={styles.text_secondary}>Fault Domain: </Text>
                  <Text style={styles.text}>{domainNameEng}</Text>
                </View>
                <View style={styles.text_container_secondary}>
                  <Text style={styles.text_secondary}>Fault: </Text>
                  <Text style={styles.text}>{faultTypeNameEng}</Text>
                </View>
                <View style={styles.text_container_secondary}>
                  <Text style={styles.text_secondary}>Location: </Text>
                  <Text style={styles.text}>{buildingName}</Text>
                  <Text style={styles.text}>{outSideName}</Text>
                </View>
                <View style={styles.text_container_secondary}>
                  <Text style={styles.text_secondary}>Space Type: </Text>
                  <Text style={styles.text}>{spaceTypeNameEng}</Text>
                </View>
                <View style={styles.text_container_secondary}>
                  <Text style={styles.text_secondary}>Space Name: </Text>
                  <Text style={styles.text}>{spaceName}</Text>
                </View>
              </View>
            </View>
            <View
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <Text style={styles.sectionTitle}>Fault Description</Text>
              <TextInput
                style={{
                  height: 100,
                  width: 300,
                  borderRadius: 10,
                  padding: 10,
                  paddingTop: 10,
                  backgroundColor: "white",
                  fontSize: 16,
                }}
                onChangeText={(text) => {
                  setDescription(text);
                }}
                enterKeyHint="next"
                enablesReturnKeyAutomatically={true}
                multiline
                placeholder="Enter a description of the fault ..."
                onSubmitEditing={() => {
                  Keyboard.dismiss();
                }}
              />
            </View>
            <View
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View style={{ flexDirection: "row", marginTop: 20 }}>
                <Text style={styles.sectionTitle}>Urgency Level</Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Slider
                  style={{ width: 300, height: 40, marginLeft: 20 }}
                  minimumValue={1}
                  maximumValue={5}
                  step={1}
                  value={urgency}
                  onValueChange={(value) => setUrgency(value)}
                  minimumTrackTintColor="#C10D0D"
                  maximumTrackTintColor="#2BC214"
                  thumbTintColor="white"
                />
                <Text style={styles.urgencyText}>{displayUrgency()}</Text>
              </View>
            </View>
            {/* <View>
              <Text style={styles.text}>Urgency: {urgency}</Text>
            </View> */}
            <View
              style={{
                width: "70%",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
                backgroundColor: "white",
                borderRadius: 10,
                padding: 10,
              }}
            >
              <ImagePicker onImageTaken={imageTakenHandler} />
            </View>
            <View style={{ marginTop: 30 }}>
              <TouchableOpacity style={styles.button} onPress={openFault}>
                <Text style={styles.textButton}>Open Fault</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
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
  text_container_secondary: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 5,
  },
  text_secondary: {
    fontSize: 16,
    fontWeight: "bold",
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
  urgencyText: {
    fontSize: 16,
    color: "black",
    marginBottom: 5,
    marginLeft: 20,
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

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  Alert,
  StyleSheet,
  ScrollView,
} from "react-native";
import { updateFault } from "../utilities/http";
import Slider from "@react-native-community/slider";
import ImagePicker from "../components/ImagePick/ImagePicker";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginLeft: 20,
    marginTop: 20,
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  text_container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    fontSize: 16,
    width: "100%",
    height: 100,
  },
  row_container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  container_primary: {
    display: "flex",
    gap: 10,
    marginBottom: 20,
    flexDirection: "column",
    alignItems: "flex-start",
  },
  title_container: {
    fontWeight: "bold",
    fontSize: 16,
  },
  btn_primary: {
    // marginTop: "20px !important",
    // marginBottom: 20,
    // padding: 10,
  },
});

const FaultEditForm = ({ navigation, route }) => {
  const fetchedFault = route.params.faultData;
  const [formData, setFormData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [description, setDescription] = useState();
  const [urgency, setUrgency] = useState();


  useEffect(() => {
    console.log("fetchedFault", fetchedFault);
    if (fetchedFault) {
      setFormData(fetchedFault);
      setUrgency(fetchedFault.urgency);
      setDescription(fetchedFault.description);
      setIsLoading(false);
    }
  }, []);

  const handleChange = (key, value) => {  
    setFormData({ ...formData, [key]: value });
  };

  const handleUpdateFault = () => {
    console.log("formData", formData);
    try {
      const fault = {
        _id: formData._id,
        description: description,
        urgency: urgency,
      }
      updateFault(fault);
    } catch (error) {
      Alert.alert("Error", `Failed to update fault: ${error.message}`);
    }
  };

  const navigatAfterUpdate = () => {
    navigation.navigate("Status");
  };

  const handleOnSubmit = () => {
    handleUpdateFault();
    navigatAfterUpdate();
  };


  const handleUrgencyChange = (key, value) => {
    setUrgency(value);
    handleChange(key, value);
  };

  const onDescriptionChange = (text) => {
    setDescription(text);
  };

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

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  if (!formData) {
    return <Text>No fault data found</Text>;
  }

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 100,
          width: "90%",
        }}
      >
        <Text style={styles.title}>Edit Fault</Text>

          <View style={styles.container_primary}>
            <Text style={styles.title_container}>Description:</Text>
            <TextInput
              style={styles.text_container}
              value={description}
              onChangeText={(text) => onDescriptionChange(text)}
              placeholder="Description"
              textAlign="left"
            />
          </View>
          <View>
            <View style={styles.container_primary}>
              <Text style={styles.title_container}>Urgency:</Text>
              <View style={styles.row_container}>
                <Slider
                  style={{ width: "80%", height: 40 }}
                  minimumValue={1}
                  maximumValue={5}
                  step={1}
                  value={urgency}
                  onValueChange={(value) =>
                    handleUrgencyChange("urgency", value)
                  }
                  minimumTrackTintColor="#C10D0D"
                  maximumTrackTintColor="#2BC214"
                  thumbTintColor="white"
                />
                <Text>{displayUrgency()}</Text>
              </View>
            </View>
          </View>  
        <Button
          title="Submit"
          onPress={handleOnSubmit}
          style={styles.btn_primary}
        ></Button>
      </ScrollView>
    </View>
  );
};

export default FaultEditForm;

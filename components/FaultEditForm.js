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

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "flex-start",
    marginLeft: 20,
    marginTop: 20,
    // width: "100%",
  },
  text_container: {
    backgroundColor: "white",
    // flexWrap: "wrap",
    padding: 10,
    borderRadius: 5,
    margin: 10,
    fontSize: 16,
    width: "60%",
    // height: "100%",
  },
  container_primary: {
    flexDirection: "row",
    alignItems: "center",
  },
  title_container: {
    fontWeight: "bold",
    fontSize: 16,
    width: "30%",
  },
  btn_primary: {
    // marginTop: "20px !important",
    // marginBottom: 20,
    // padding: 10,
  },
  // text_container_secondary: {},
  // text_secondary: {
  //   fontWeight: "bold",
  //   fontSize: 20,
  // },
});

const FaultEditForm = ({ route }) => {
  const fetchedFault = route.params.faultData;
  const [formData, setFormData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("fetchedFault", fetchedFault);
    if (fetchedFault) {
      setFormData(fetchedFault);
      setIsLoading(false);
    }
  }, []);

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleUpdateFault = () => {
    // updateFault(formData)
    console.log("formData", formData);
    // .then(() => {
    //   Alert.alert("Success", "Fault updated successfully");
    // })
    // .catch((error) => {
    //   Alert.alert("Error", `Failed to update fault: ${error.message}`);
    // });
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
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {formData._id && (
          <View style={styles.container_primary}>
            <Text style={styles.title_container}>Fault ID:</Text>
            <TextInput
              multiline={true}
              style={styles.text_container}
              value={formData._id}
              onChangeText={(text) => handleChange("_id", text)}
              placeholder="Fault ID"
            />
          </View>
        )}
        {formData.domainId && (
          <View style={styles.container_primary}>
            <Text style={styles.title_container}>Domain ID:</Text>
            <TextInput
              style={styles.text_container}
              value={formData.domainId}
              onChangeText={(text) => handleChange("domainId", text)}
              placeholder="Domain ID"
            />
          </View>
        )}
        {formData.domainNameEng && (
          <View style={styles.container_primary}>
            <Text style={styles.title_container}>Domain Name:</Text>
            <TextInput
              style={styles.text_container}
              value={formData.domainNameEng}
              onChangeText={(text) => handleChange("domainNameEng", text)}
              placeholder="Domain Name (English)"
            />
          </View>
        )}
        {formData.faultTypeId && (
          <View style={styles.container_primary}>
            <Text style={styles.title_container}>Fault Type ID:</Text>
            <TextInput
              style={styles.text_container}
              value={formData.faultTypeId}
              onChangeText={(text) => handleChange("faultTypeId", text)}
              placeholder="Fault Type ID"
            />
          </View>
        )}
        {formData.faultTypeNameEng && (
          <View style={styles.container_primary}>
            <Text style={styles.title_container}>Fault Type Name:</Text>
            <TextInput
              style={styles.text_container}
              value={formData.faultTypeNameEng}
              onChangeText={(text) => handleChange("faultTypeNameEng", text)}
              placeholder="Fault Type Name (English)"
            />
          </View>
        )}
        {formData.buildingId && (
          <View style={styles.container_primary}>
            <Text style={styles.title_container}>Building ID:</Text>
            <TextInput
              style={styles.text_container}
              value={formData.buildingId}
              onChangeText={(text) => handleChange("buildingId", text)}
              placeholder="Building ID"
            />
          </View>
        )}
        {formData.buildingName && (
          <View style={styles.container_primary}>
            <Text style={styles.title_container}>Building Name:</Text>
            <TextInput
              style={styles.text_container}
              value={formData.buildingName}
              onChangeText={(text) => handleChange("buildingName", text)}
              placeholder="Building Name"
            />
          </View>
        )}
        {formData.outSideId && (
          <View style={styles.container_primary}>
            <Text style={styles.title_container}>Outside ID:</Text>
            <TextInput
              style={styles.text_container}
              value={formData.outSideId}
              onChangeText={(text) => handleChange("outSideId", text)}
              placeholder="Outside ID"
            />
          </View>
        )}
        {formData.outSideName && (
          <View style={styles.container_primary}>
            <Text style={styles.title_container}>Outside Name:</Text>
            <TextInput
              style={styles.text_container}
              value={formData.outSideName}
              onChangeText={(text) => handleChange("outSideName", text)}
              placeholder="Outside Name"
            />
          </View>
        )}
        {formData.spaceTypeId && (
          <View style={styles.container_primary}>
            <Text style={styles.title_container}>Space Type ID:</Text>
            <TextInput
              style={styles.text_container}
              value={formData.spaceTypeId}
              onChangeText={(text) => handleChange("spaceTypeId", text)}
              placeholder="Space Type ID"
            />
          </View>
        )}
        {formData.spaceTypeNameEng && (
          <View style={styles.container_primary}>
            <Text style={styles.title_container}>Space Type Name:</Text>
            <TextInput
              style={styles.text_container}
              value={formData.spaceTypeNameEng}
              onChangeText={(text) => handleChange("spaceTypeNameEng", text)}
              placeholder="Space Type Name (English)"
            />
          </View>
        )}
        {formData.spaceNumber && (
          <View style={styles.container_primary}>
            <Text style={styles.title_container}>Space Number:</Text>
            <TextInput
              style={styles.text_container}
              value={formData.spaceNumber}
              onChangeText={(text) => handleChange("spaceNumber", text)}
              placeholder="Space Number"
            />
          </View>
        )}
        {formData.spaceName && (
          <View style={styles.container_primary}>
            <Text style={styles.title_container}>Space Name:</Text>
            <TextInput
              style={styles.text_container}
              value={formData.spaceName}
              onChangeText={(text) => handleChange("spaceName", text)}
              placeholder="Space Name"
            />
          </View>
        )}
        {formData.description && (
          <View style={styles.container_primary}>
            <Text style={styles.title_container}>Description:</Text>
            <TextInput
              style={styles.text_container}
              value={formData.description}
              onChangeText={(text) => handleChange("description", text)}
              placeholder="Description"
            />
          </View>
        )}
        {formData.urgency && (
          <View style={styles.container_primary}>
            <Text style={styles.title_container}>Urgency:</Text>
            <TextInput
              style={styles.text_container}
              value={formData.urgency.toString()}
              onChangeText={(text) => handleChange("urgency", parseFloat(text))}
              placeholder="Urgency"
            />
          </View>
        )}
        {formData.reportByUser && (
          <View style={styles.container_primary}>
            <Text style={styles.title_container}>Report By User:</Text>
            <TextInput
              style={styles.text_container}
              value={formData.reportByUser}
              onChangeText={(text) => handleChange("reportByUser", text)}
              placeholder="Report By User"
            />
          </View>
        )}
        {formData.photo && (
          <View style={styles.container_primary}>
            <Text style={styles.title_container}>Photo:</Text>
            <TextInput
              style={styles.text_container}
              value={formData.photo}
              onChangeText={(text) => handleChange("photo", text)}
              placeholder="Photo"
            />
          </View>
        )}
        <Button
          title="Submit"
          onPress={handleUpdateFault}
          style={styles.btn_primary}
        />
      </ScrollView>
    </View>
  );
};

export default FaultEditForm;

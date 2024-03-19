import React, { useState, useEffect } from "react";
import { View, Text, Button, TextInput, Alert } from "react-native";
import { updateFault } from "../utilities/http";

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
    <View>
      <TextInput
        value={formData.domainId}
        onChangeText={(text) => handleChange("domainId", text)}
        placeholder="Domain ID"
      />
      <TextInput
        value={formData.domainNameEng}
        onChangeText={(text) => handleChange("domainNameEng", text)}
        placeholder="Domain Name (English)"
      />
      <TextInput
        value={formData.domainNameHeb}
        onChangeText={(text) => handleChange("domainNameHeb", text)}
        placeholder="Domain Name (Hebrew)"
      />
      <TextInput
        value={formData.faultTypeId}
        onChangeText={(text) => handleChange("faultTypeId", text)}
        placeholder="Fault Type ID"
      />
      <TextInput
        value={formData.faultTypeNameEng}
        onChangeText={(text) => handleChange("faultTypeNameEng", text)}
        placeholder="Fault Type Name (English)"
      />
      <TextInput
        value={formData.faultTypeNameHeb}
        onChangeText={(text) => handleChange("faultTypeNameHeb", text)}
        placeholder="Fault Type Name (Hebrew)"
      />
      <TextInput
        value={formData.buildingId}
        onChangeText={(text) => handleChange("buildingId", text)}
        placeholder="Building ID"
      />
      <TextInput
        value={formData.buildingName}
        onChangeText={(text) => handleChange("buildingName", text)}
        placeholder="Building Name"
      />
      <TextInput
        value={formData.outSide}
        onChangeText={(text) => handleChange("outSide", text)}
        placeholder="Outside"
      />
      <TextInput
        value={formData.outSideId}
        onChangeText={(text) => handleChange("outSideId", text)}
        placeholder="Outside ID"
      />
      <TextInput
        value={formData.outSideName}
        onChangeText={(text) => handleChange("outSideName", text)}
        placeholder="Outside Name"
      />
      <TextInput
        value={formData.spaceTypeId}
        onChangeText={(text) => handleChange("spaceTypeId", text)}
        placeholder="Space Type ID"
      />
      <TextInput
        value={formData.spaceTypeNameEng}
        onChangeText={(text) => handleChange("spaceTypeNameEng", text)}
        placeholder="Space Type Name (English)"
      />
      <TextInput
        value={formData.spaceTypeNameHeb}
        onChangeText={(text) => handleChange("spaceTypeNameHeb", text)}
        placeholder="Space Type Name (Hebrew)"
      />
      <TextInput
        value={formData.spaceNumber}
        onChangeText={(text) => handleChange("spaceNumber", text)}
        placeholder="Space Number"
      />
      <TextInput
        value={formData.spaceName}
        onChangeText={(text) => handleChange("spaceName", text)}
        placeholder="Space Name"
      />
      <TextInput
        value={formData.description}
        onChangeText={(text) => handleChange("description", text)}
        placeholder="Description"
      />
      <TextInput
        value={formData.urgency}
        onChangeText={(text) => handleChange("urgency", text)}
        placeholder="Urgency"
      />
      <TextInput
        value={formData.reportByUser}
        onChangeText={(text) => handleChange("reportByUser", text)}
        placeholder="Report By User"
      />
      <TextInput
        value={formData.photo}
        onChangeText={(text) => handleChange("photo", text)}
        placeholder="Photo"
      />
      <Button title="Submit" onPress={handleUpdateFault} />
    </View>
  );
};

export default FaultEditForm;

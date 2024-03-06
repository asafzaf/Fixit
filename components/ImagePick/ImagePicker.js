import { useState, useEffect } from "react";
import { Button, View, Alert, Image } from "react-native";
import {
  launchCameraAsync,
  launchImageLibraryAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import React from "react";

function ImagePicker({ onImageTaken }) {
  const [pickedImage, setPickedImage] = useState(null);
  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();

  async function verifyPermissions() {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const premissionResponse = await requestPermission();

      return premissionResponse.granted;
    }
    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient permissions",
        "You need to grant camera permissions to use this app",
        [{ text: "Okay" }]
      );
      return false;
    }
    return true;
  }
  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    // console.log(image);
    setPickedImage(image.assets[0].uri);
    onImageTaken(image.assets[0].uri);
  };

  const pickImageHandler = async () => {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    const image = await launchImageLibraryAsync();
    setPickedImage(image.assets[0].uri);
    onImageTaken(image.assets[0].uri);
  };

  let imagePreview = null;

  if (pickedImage) {
    imagePreview = (
      <Image
        source={{ uri: pickedImage }}
        style={{ width: 200, height: 200 }}
      />
    );
  }

  return (
    <View>
      {imagePreview}
      <View>
        <Button title="Take Image" onPress={takeImageHandler} />
        <Button title="Pick Image" onPress={pickImageHandler} />
      </View>
    </View>
  );
}

export default ImagePicker;

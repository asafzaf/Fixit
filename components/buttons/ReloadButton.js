import React from "react";
import { View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

let image = require("../../assets/Reload-WF.png");

function ReloadButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={image} style={{ height: 30, width: 30 }} />
    </TouchableOpacity>
  );
}

export default ReloadButton;

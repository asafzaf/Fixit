import { Image, Text, View } from "react-native";
import { styles } from "../styles";

let image = require("../assets/header-logo.png");

function FixitHeader({ navigation }) {
  return (
    <View
      style={{
        backgroundColor: "white",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        height: 110,
      }}
    >
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Image style={{ width: 250, height: 100 }} source={image} />
      </View>
    </View>
  );
}

export default FixitHeader;

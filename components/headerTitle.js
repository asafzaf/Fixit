import { Image, Text, View } from "react-native";

function TitleHeader({ title }) {
  return (
    <View
      style={{
        // backgroundColor: "white",
        // borderBottomColor: "black",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{ height: 50, alignItems: "center", justifyContent: "center" }}
      >
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>{title}</Text>
      </View>
    </View>
  );
}

export default TitleHeader;

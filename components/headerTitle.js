import { Image, Text, View } from "react-native";

function TitleHeader({ title }) {
  return (
    <View
      style={{
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

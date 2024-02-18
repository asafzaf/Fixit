import { Text, View } from "react-native";
import BigSelectionButton from "../../components/buttons/BigSelectionButton";
import { styles } from "../../styles";
import FixitHeader from "../../components/header";

function OpenNewFaultScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.small_title}>ברוך הבא!</Text>
      <BigSelectionButton
        colors={["#0100D8", "#0100FF"]}
        logo={require("../../assets/Tools-01.png")}
        title="פתח תקלה חדשה"
        onPress={() => navigation.navigate("Root", { screen: "Open Fault" })}
      ></BigSelectionButton>
    </View>
  );
}

export default OpenNewFaultScreen;

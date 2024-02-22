import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import UrgencyButton from "../buttons/UrgencySelectionButton";

function UrgencyLevelsButtons(props) {

  const colors = props.colors ? props.colors : ["#0100D8", "#0100D8"];
  return (
    <View style={{ marginTop: 20 }}>
          <View style={{ flexDirection: "row" }}>
            <UrgencyButton colors={["#39A313", "#378719"]} value={1} setUrgency={props.setUrgency} title="Lowest"></UrgencyButton>
            <UrgencyButton colors={["#3DC00D", "#61F72A"]} value={2} setUrgency={props.setUrgency} title="Low"></UrgencyButton>
            <UrgencyButton colors={["#BBC50A", "#FBFF13"]} value={3} setUrgency={props.setUrgency} title="Medium"></UrgencyButton>
            <UrgencyButton colors={["#DAB606", "#FFD415"]} value={4} setUrgency={props.setUrgency} title="High"></UrgencyButton>
            <UrgencyButton colors={["#D34E01", "#F44004"]} value={5} setUrgency={props.setUrgency} title="Critical"></UrgencyButton>
          </View>
        </View>
  );
}

export default UrgencyLevelsButtons;
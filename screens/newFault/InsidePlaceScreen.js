import { ScrollView, StyleSheet, Text, View } from "react-native";
import { styles } from "../../styles";
import BigSelectionButton from "../../components/buttons/BigSelectionButton";
import buildingDUMMY from "../../data/buildingDUMMY";

function InsidePlaceScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.boldText}>תקלה בפנים:</Text>
      <Text>בחר בניין</Text>
      <View style={{ height: 600, width:400, alignItems:"center" }}>
        <ScrollView style={{height:300}}>
          {buildingDUMMY.buildings.map((building) => (
            <View key={building.buildingID}>
              <BigSelectionButton
                key={building.buildingID}
                title={building.buildingName}
                colors={["#2768FF", "#2768FF"]}
                onPress={() => {
                  navigation.navigate("SpaceChooser", {
                    buildingId: building.buildingID,
                    buildingName: building.buildingName,
                    data: building.floors
                  });
                }}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

export default InsidePlaceScreen;

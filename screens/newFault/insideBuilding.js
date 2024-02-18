import { ScrollView, StyleSheet, Text, View } from "react-native";
import { styles } from "../../styles";
import BigSelectionButton from "../../components/buttons/BigSelectionButton";
import buildingDUMMY from "../../data/buildingDUMMY";
import FixitHeader from "../../components/header";

colors = ["#6416F8", "#8E52FF", "#FFA31A", "#FDBB59", "#E7008C", "#FE59BD"];
let i = 0;

function InsidePlaceScreen({ navigation }) {
  if (i >= colors.length) i = 0;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <FixitHeader></FixitHeader>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={styles.small_title}>Choose Building</Text>
        <View style={{ height: 600, width: 400, alignItems: "center" }}>
          <ScrollView style={{ height: 300 }}>
            {buildingDUMMY.buildings.map((building) => (
              <View key={building.buildingID}>
                <BigSelectionButton
                  key={building.buildingID}
                  title={building.buildingName}
                  colors={[colors[i], colors[i + 1]]}
                  {...(i += 2)}
                  onPress={() => {
                    navigation.navigate("SpaceChooser", {
                      buildingId: building.buildingID,
                      buildingName: building.buildingName,
                      data: building.floors,
                    });
                  }}
                />
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

export default InsidePlaceScreen;

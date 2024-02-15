import { ScrollView, StyleSheet, Text, View } from "react-native";
import { styles } from "../../styles";
import BigSelectionButton from "../../components/buttons/BigSelectionButton";
import buildingDUMMY from "../../data/buildingDUMMY";

function SpaceChooceScreen({ navigation, route }) {
    const buildingId = route.params.buildingId;
    const buildingName = route.params.buildingName;
  const data = route.params.data;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.boldText}>{buildingName}</Text>
      <Text>בחר מרחב:</Text>
      <View style={{ height: 600, width: 400, alignItems: "center" }}>
        <ScrollView style={{ height: 300 }}>
          {data.map((floor) => (
            floor.spaces.map((space) => (
              <View key={space.spaceID}>
                <BigSelectionButton
                  key={space.spaceID}
                  title={space.spaceName}
                  colors={["#2768FF", "#2768FF"]}
                  onPress={() => {
                    navigation.navigate("FaultChoose", {
                      spaceId: space.spaceID,
                      spaceName: space.spaceName,
                      buildingId: buildingId,
                      buildingName: buildingName,
                    });
                  }}
                />
              </View>
            ))
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

export default SpaceChooceScreen;

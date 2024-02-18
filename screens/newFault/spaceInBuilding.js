import { ScrollView, StyleSheet, Text, View } from "react-native";
import { styles } from "../../styles";
import BigSelectionButton from "../../components/buttons/BigSelectionButton";
import buildingDUMMY from "../../data/buildingDUMMY";
import FixitHeader from "../../components/header";

colors = ["#6416F8", "#8E52FF", "#FFA31A", "#FDBB59", "#E7008C", "#FE59BD"];
let i = 0;

function SpaceChooceScreen({ navigation, route }) {
  const buildingId = route.params.buildingId;
  const buildingName = route.params.buildingName;
  const data = route.params.data;
  if (i >= colors.length) i = 0;
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <FixitHeader></FixitHeader>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {/* <Text style={styles.small_title}>Building: {buildingName}</Text> */}
        <Text style={styles.small_title}>Choose Space</Text>
        <View style={{ height: 600, width: 400, alignItems: "center" }}>
          <ScrollView style={{ height: 300 }}>
            {data.map((floor) =>
              floor.spaces.map((space) => (
                <View key={space.spaceID}>
                  <BigSelectionButton
                    key={space.spaceID}
                    title={space.spaceName}
                    colors={[colors[i], colors[i + 1]]}
                    {...(i += 2)}
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
            )}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

export default SpaceChooceScreen;

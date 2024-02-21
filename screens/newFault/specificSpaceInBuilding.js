// // 4rd PAGE OF THE FAULT REPORTING PROCESS

import { ScrollView, FlatList, Text, View } from "react-native";
import { styles } from "../../styles";
import SmallSelectionButton from "../../components/buttons/smallSelectionButton";
import buildingDUMMY from "../../data/buildingDUMMY";
import TitleHeader from "../../components/headerTitle";

colors = ["#6416F8", "#8E52FF", "#FFA31A", "#FDBB59", "#E7008C", "#FE59BD"];
let i = 0;

function SpaceChooceScreen({ navigation, route }) {
  const spaceId = route.params.spaceId;
  const spaceName = route.params.spaceName;
  const buildingId = route.params.buildingId;
  const buildingName = route.params.buildingName;
  const data = route.params.buildingData;

  if (i >= colors.length) {
    i = 0;
  }
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <TitleHeader title={"Open New Fault"}></TitleHeader>
      <View
        style={{
          marginTop: 20,
          alignItems: "center",
        }}
      >
        <Text style={styles.small_title}>Select a {spaceName}</Text>
        <View>
          <ScrollView>
            {data.map((floor) =>
              floor.spaces.map((space) => (
                <View key={space.spaceID}>
                  <SmallSelectionButton
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

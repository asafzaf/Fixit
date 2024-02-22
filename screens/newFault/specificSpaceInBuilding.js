// // 4rd PAGE OF THE FAULT REPORTING PROCESS

// ADD TO LOWER CASE !!!!!

import { FlatList, Text, View } from "react-native";
import { styles } from "../../styles";
import SmallSelectionButton from "../../components/buttons/smallSelectionButton";
import TitleHeader from "../../components/headerTitle";
import SpecificSpacesGrid from "../../components/SpecificSpaceGrid";

Colors = ["#6416F8", "#FFA31A", "#E7008C", "#6416F8", "#B339FE", "#00B5CC"];
let i = 0;

function ChooceSpecificSpaceScreen({ navigation, route }) {
  const spaceTypeId = route.params.spaceTypeId;
  const spaceTypeName = route.params.spaceTypeName;
  const spaceTypeNameHebrew = route.params.spaceTypeNameHebrew;
  const buildingId = route.params.buildingId;
  const buildingName = route.params.buildingName;
  const data = route.params.buildingData;

  const dataDisplay = [];

  for (const floor of data.floors) {
    for (const space of floor.spaces) {
      if (space.spaceType == spaceTypeName) {
        dataDisplay.push(space);
      }
    }
  }

  for (const staircase of data.staircases) {
    if (staircase.spaceType == spaceTypeName) {
      dataDisplay.push(staircase);
    }
  }

  function renderSpecificSpaces({ item }) {
    if (i >= Colors.length) {
      i = 0;
    }
    let color1 = Colors[i];
    i += 1;
    return (
      <SpecificSpacesGrid
        color1={color1}
        navigation={navigation}
        spaceTypeId={spaceTypeId}
        spaceTypeName={spaceTypeName}
        spaceTypeNameHebrew={spaceTypeNameHebrew}
        buildingId={buildingId}
        buildingName={buildingName}
        name={item.spaceName}
        spaceId={item.spaceNumber}
      />
    );
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
        <Text style={styles.small_title}>Select a {spaceTypeName}</Text>
        <View>
          <FlatList
            data={dataDisplay}
            keyEtrator={(item) => item.spaceName}
            renderItem={renderSpecificSpaces}
            numColumns={2}
          />
        </View>
      </View>
    </View>
  );
}

export default ChooceSpecificSpaceScreen;

// 3rd PAGE OF THE FAULT REPORTING PROCESS

import { ScrollView, FlatList, Text, View } from "react-native";
import { styles } from "../../styles";
import SmallSelectionButton from "../../components/buttons/smallSelectionButton";
import TitleHeader from "../../components/headerTitle";
import SpacesGrid from "../../components/SpacesGrid";
import SpacesList from "../../data/spaceType.json";

spacesColors = [
  "#6416F8",
  "#FFA31A",
  "#E7008C",
  "#6416F8",
  "#B339FE",
  "#00B5CC",
];
let i = 0;

function SpaceChooceScreen({ navigation, route }) {
  const buildingId = route.params.buildingId;
  const buildingName = route.params.buildingName;
  const data = route.params.data;

  function renderSpaces({ item }) {
    if (i >= spacesColors.length) {
      i = 0;
    }
    let color1 = spacesColors[i];
    i += 1;
    return (
      <SpacesGrid
        name={item.name}
        id={item._id}
        description={item.description}
        color1={color1}
        navigation={navigation}
        buildingId={buildingId}
        buildingName={buildingName}
        buildingData={data}
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
        <Text style={styles.small_title}>Select a space type</Text>
        <FlatList
          data={SpacesList.data.spaceTypes}
          keyEtrator={(item) => item._id}
          renderItem={renderSpaces}
          numColumns={2}
        />
      </View>
    </View>
  );
}

export default SpaceChooceScreen;

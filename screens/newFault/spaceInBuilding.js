// 3rd PAGE OF THE FAULT REPORTING PROCESS

import { ScrollView, FlatList, Text, View } from "react-native";
import { styles } from "../../styles";
import SmallSelectionButton from "../../components/buttons/smallSelectionButton";
import TitleHeader from "../../components/headerTitle";
import SpacesGrid from "../../components/SpacesGrid";
import SpacesList from "../../data/spaceType.json";

colors = ["#6416F8", "#8E52FF", "#FFA31A", "#FDBB59", "#E7008C", "#FE59BD"];
let i = 0;

function renderSpaces({ item }) {
  if (i >= colors.length) {
    i = 0;
  }
  let color1 = colors[i];
  let color2 = colors[i + 1];
  i += 2;
  return (
    <SpacesGrid
      name={item.name}
      description={item.description}
      color1={color1}
      color2={color2}
    />
  );
}

function SpaceChooceScreen({ navigation, route }) {
  const buildingId = route.params.buildingId;
  const buildingName = route.params.buildingName;
  const data = route.params.data;

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
        {/* ---------------------------------------- */}
        <FlatList
          data={SpacesList.data.spaceTypes}
          keyEtrator={(item) => item._id}
          renderItem={renderSpaces}
          numColumns={2}
        />

        {/* <View>
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
        </View> */}
        {/* ---------------------------------------- */}
      </View>
    </View>
  );
}

export default SpaceChooceScreen;

// 3rd PAGE OF THE FAULT REPORTING PROCESS

import * as React from "react";
import { ScrollView, FlatList, Text, View } from "react-native";
import { styles } from "../../styles";
import SmallSelectionButton from "../../components/buttons/smallSelectionButton";
import TitleHeader from "../../components/headerTitle";
import SpacesGrid from "../../components/SpacesGrid";
// import SpacesList from "../../data/spaceType.json";
import { getAllSpacesTypes } from "../../utilities/http";
import LoadingOverlay from "../../components/UI/LoadingOverlay";

function SpaceChooceScreen({ navigation, route }) {
  const buildingId = route.params.buildingId;
  const buildingName = route.params.buildingName;
  const data = route.params.data;

  const [isFetching, setIsFetching] = React.useState(true);

  const [fetchedSpaceTypes, setfetchedSpaceTypes] = React.useState([]);

  React.useEffect(() => {
    async function getSpaceTypes() {
      setIsFetching(true);
      const spaceTypes = await getAllSpacesTypes();
      setIsFetching(false);
      setfetchedSpaceTypes(spaceTypes);
    }

    getSpaceTypes();
  }, []);

  if (isFetching) {
    return <LoadingOverlay />;
  }

  function renderSpaces({ item }) {
    return (
      <SpacesGrid
        name={item.name}
        hebrew={item.hebrew}
        id={item._id}
        description={item.description}
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
        {/* <View style={{ height: "80%" }}> */}
        <FlatList
          data={fetchedSpaceTypes}
          keyEtrator={(item) => item._id}
          renderItem={renderSpaces}
          numColumns={2}
        />
        {/* </View> */}
      </View>
    </View>
  );
}

export default SpaceChooceScreen;

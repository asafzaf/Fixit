import { Button, FlatList, Text, View } from "react-native";
import { styles } from "../../styles";
import TitleHeader from "../../components/headerTitle";
import OutsideSpacesGrid from "../../components/OutsideSpacesGrid";

function OutsideSpaceScreen({ navigation, route }) {
  const outsideId = route.params.outsideId;
  const outsideName = route.params.outsideName;
  const data = route.params.data;

  const dataDisplay = [];

  for (const space of data.spaces) {
    dataDisplay.push(space);
  }

  function renderSpaces({ item }) {
    return (
      <OutsideSpacesGrid
        navigation={navigation}
        name={item.spaceName}
        spaceType={item.spaceType}
        outsideId={outsideId}
        outsideName={outsideName}
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
          height: "70%",
        }}
      >
        <Text style={styles.small_title}>Select Space</Text>
        <View>
          <FlatList
            data={dataDisplay}
            keyEtrator={(item) => item.spaceName}
            renderItem={renderSpaces}
            numColumns={2}
            contentContainerStyle={{
              paddingBottom: 20,
              height: "90%",
            }}
          />
        </View>
        <View>
          <Button title="Go Back" onPress={() => navigation.popToTop()} />
        </View>
      </View>
    </View>
  );
}

export default OutsideSpaceScreen;

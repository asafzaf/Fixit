// 2nd PAGE OF THE FAULT REPORTING PROCESS

import * as React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { styles } from "../../styles";
import BigSelectionButton from "../../components/buttons/BigSelectionButton";
// import buildingDUMMY from "../../data/buildingDUMMY";
import TitleHeader from "../../components/headerTitle";
import { getAllBuildings } from "../../utilities/http";
import LoadingOverlay from "../../components/UI/LoadingOverlay";

colors = ["#164863", "#164863", "#427D9D", "#427D9D", "#9BBEC8", "#9BBEC8"];
let i = 0;

function InsidePlaceScreen({ navigation }) {
  if (i >= colors.length) i = 0;

  const [isFetching, setIsFetching] = React.useState(true);

  const [fetchedBuildings, setfetchedBuildings] = React.useState([]);

  React.useEffect(() => {
    async function getBuldings() {
      setIsFetching(true);
      const buildings = await getAllBuildings();
      setIsFetching(false);

      setfetchedBuildings(buildings);
    }

    getBuldings();
  }, []);

  if (isFetching) {
    return <LoadingOverlay />;
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
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 100,
        }}
      >
        <Text style={styles.small_title}>In which building?</Text>
        <ScrollView>
          <View style={{ height: 600, width: 400, alignItems: "center" }}>
            <ScrollView style={{ height: 300 }}>
              {fetchedBuildings.map((building) => (
                <View key={building._id}>
                  <BigSelectionButton
                    key={building._id}
                    title={building.buildingName + " Building"}
                    colors={[colors[i], colors[i + 1]]}
                    {...(i += 2)}
                    onPress={() => {
                      navigation.navigate("SpaceTypeChooser", {
                        buildingId: building._id,
                        buildingName: building.buildingName,
                        data: building,
                      });
                    }}
                  />
                </View>
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default InsidePlaceScreen;

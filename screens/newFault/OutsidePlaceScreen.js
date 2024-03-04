import { Button, ScrollView, Text, View } from "react-native";
import { getAllOutsided } from "../../utilities/http";
import LoadingOverlay from "../../components/UI/LoadingOverlay";
import * as React from "react";
import BigSelectionButton from "../../components/buttons/BigSelectionButton";

function OutsidePlaceScreen({ navigation }) {
  const [isFetching, setIsFetching] = React.useState(true);

  const [fetchedOutsides, setfetchedOutsides] = React.useState([]);

  React.useEffect(() => {
    async function getOutsides() {
      setIsFetching(true);
      const outsides = await getAllOutsided();

      setIsFetching(false);

      setfetchedOutsides(outsides);
    }

    getOutsides();
  }, []);

  if (isFetching) {
    return <LoadingOverlay />;
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Outdoors</Text>
      <ScrollView>
        <View style={{ height: 600, width: 400, alignItems: "center" }}>
          <ScrollView style={{ height: 300 }}>
            {fetchedOutsides.map((outside) => (
              <View key={outside._id}>
                {/* {console.log(outside)} */}
                <BigSelectionButton
                  key={outside._id}
                  title={outside.name}
                  colors={["#365486", "#0F1035"]}
                  onPress={() => {
                    navigation.navigate("OutsideSpace", {
                      outsideId: outside._id,
                      outsideName: outside.name,
                      data: outside,
                    });
                  }}
                />
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
      <Button
        title="Back To Home Screen"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

export default OutsidePlaceScreen;

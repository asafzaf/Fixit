import { Button, Text, View, FlatList } from "react-native";
import * as React from "react";
import TitleHeader from "../../components/headerTitle";
// import faultsList from "../../data/faultsDUMMY.json";
import FaultsGrid from "../../components/FaultsGrid";
import { getAllFaults } from "../../utilities/http";

function renderFaults({ item }) {
  return (
    <FaultsGrid
      id={item._id}
      domain={item.domainNameEng}
      subDomain={item.typeNameEng}
      location={item.spaceName}
    />
  );
}

function HistoryScreen({ navigation }) {
  const [fetchedFaults, setFetchedFaults] = React.useState([]);

  React.useEffect(() => {
    async function getFaults() {
      const faults = await getAllFaults();
      setFetchedFaults(faults);
    }

    getFaults();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <TitleHeader title={"History"}></TitleHeader>
      <FlatList
        data={fetchedFaults}
        keyEtrator={(item) => item._id}
        renderItem={renderFaults}
      />
      <Button
        title="Back To Home Screen"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

export default HistoryScreen;

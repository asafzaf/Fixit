import { Button, Text, View, FlatList } from "react-native";
import * as React from "react";
import TitleHeader from "../../components/headerTitle";
import FaultsGrid from "../../components/FaultsGrid";
import { getAllFaults } from "../../utilities/http";
import LoadingOverlay from "../../components/UI/LoadingOverlay";

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
  const [isFetching, setIsFetching] = React.useState(true);

  const [fetchedFaults, setFetchedFaults] = React.useState([]);

  React.useEffect(() => {
    async function getFaults() {
      setIsFetching(true);

      const faults = await getAllFaults();
      setIsFetching(false);

      setFetchedFaults(faults);
    }

    getFaults();
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
      <TitleHeader title={"History"}></TitleHeader>
      <View style={{ height: "80%" }}>
        <FlatList
          data={fetchedFaults}
          keyEtrator={(item) => item._id}
          renderItem={renderFaults}
        />
      </View>
      <Button
        title="Back To Home Screen"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

export default HistoryScreen;

import { Button, Text, View, FlatList } from "react-native";
import * as React from "react";
import TitleHeader from "../../components/headerTitle";
import FaultsGrid from "../../components/FaultsGrid";
import { getFaultsByUserId } from "../../utilities/http";
import LoadingOverlay from "../../components/UI/LoadingOverlay";
import { AuthContext } from "../../store/auth-context";

function renderFaults({ item }) {
  return (
    <FaultsGrid
      id={item._id}
      domain={item.domainNameEng}
      faultTypeName={item.faultTypeNameEng}
      location={item.spaceName}
    />
  );
}

function HistoryScreen({ navigation }) {
  const [isFetching, setIsFetching] = React.useState(true);

  const [fetchedFaults, setFetchedFaults] = React.useState([]);

  const authCtx = React.useContext(AuthContext);

  React.useEffect(() => {
    async function getFaults() {
      setIsFetching(true);

      const faults = await getFaultsByUserId(authCtx.userId).catch((err) => {
        setIsFetching(false);
        console.log(err);
      });
      if (faults === null) {
        setIsFetching(false);
        return;
      }
      const filteredRes = faults.filter((fault) => {
        return fault.status === "closed";
      });
      setIsFetching(false);

      setFetchedFaults(filteredRes);
    }

    getFaults();
  }, []);

  if (isFetching) {
    return <LoadingOverlay />;
  }

  if (fetchedFaults.length === 0)
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 40,
        }}
      >
        <TitleHeader title={"History"}></TitleHeader>
        <Text>No history found</Text>
        <Button
          title="Back To Home Screen"
          onPress={() => navigation.popToTop()}
        />
      </View>
    );

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
          renderItem={({ item }) => (
            <FaultsGrid
              id={item._id}
              domain={item.domainNameEng}
              faultTypeName={item.faultTypeNameEng}
              location={item.spaceName}
              navigation={navigation}
            />
          )}
        />
      </View>
      <Button
        title="Back To Home Screen"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

//test

export default HistoryScreen;

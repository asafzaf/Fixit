import { useContext } from "react";
import { Button, FlatList, Text, View } from "react-native";
import * as React from "react";
import TitleHeader from "../../components/headerTitle";
import LoadingOverlay from "../../components/UI/LoadingOverlay";
import FaultStatusGrid from "../../components/FaultStatusGrid";
import { AuthContext } from "../../store/auth-context";
import { getFaultsByUserId } from "../../utilities/http";

function StatusScreen({ navigation }) {
  const [isFetching, setIsFetching] = React.useState(true);

  const [fetchedFaults, setFetchedFaults] = React.useState([]);
  const [err, setErr] = React.useState(null);

  const authCtx = useContext(AuthContext);

  React.useEffect(() => {
    async function getFaults() {
      setIsFetching(true);
      const faults = await getFaultsByUserId(authCtx.userId).catch((err) => {
        setErr("Error fetching faults");
        setIsFetching(false);
        console.log(err);
        return;
      });
      if (faults === null) {
        setErr("Error fetching faults");
        setIsFetching(false);
        return;
      } else if (faults.length === 0) {
        setErr("No faults found");
        setIsFetching(false);
        return;
      }
      setIsFetching(false);
      setFetchedFaults(faults);
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
        <Text>No faults found</Text>
        <Button
          title="Back To Home Screen"
          onPress={() => navigation.popToTop()}
        />
      </View>
    );

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TitleHeader title={"Status"}></TitleHeader>
      <View
        style={{
          width: "85%",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {err && <Text>{err}</Text>}
        {!err && (
          <FlatList
            data={fetchedFaults}
            keyEtrator={(item) => item._id}
            contentContainerStyle={{ paddingBottom: 100 }}
            renderItem={({ item }) => (
              <FaultStatusGrid
                id={item._id}
                name={item.faultTypeNameEng}
                location={item.spaceName}
                status={item.status}
                navigation={navigation}
              />
            )}
          />
        )}
      </View>
      <View style={{ marginBottom: 70 }}>
        <Button
          title="Back To Home Screen"
          onPress={() => navigation.popToTop()}
        />
      </View>
    </View>
  );
}

export default StatusScreen;

import { useContext } from "react";
import { Button, FlatList, Text, View } from "react-native";
import * as React from "react";
import TitleHeader from "../../components/headerTitle";
import { getAllFaults } from "../../utilities/http";
import LoadingOverlay from "../../components/UI/LoadingOverlay";
import FaultStatusGrid from "../../components/FaultStatusGrid";
import { AuthContext } from "../../store/auth-context";
import { getFaultsByUserId } from "../../utilities/http";

function renderFaults({ item }) {
  return <FaultStatusGrid id={item._id} status={item.status} />;
}

function StatusScreen({ navigation }) {
  const [isFetching, setIsFetching] = React.useState(true);

  const [fetchedFaults, setFetchedFaults] = React.useState([]);
  const [err, setErr] = React.useState(null);

  const authCtx = useContext(AuthContext);

  React.useEffect(() => {
    async function getFaults() {
      setIsFetching(true);
      const faults = await getFaultsByUserId(authCtx.userId);
      if (faults === null) {
        setErr("Error fetching faults");
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

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TitleHeader title={"Status"}></TitleHeader>
      <View
        style={{
          // height: "60%",
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
            renderItem={renderFaults}
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

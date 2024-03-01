import React, { useContext } from "react";
import { getFaultById } from "../../utilities/http";
import { View, Text, Button, ActivityIndicator } from "react-native";
import TitleHeader from "../../components/headerTitle";
import { AuthContext } from "../../store/auth-context";

const FaultItemScreen = ({ navigation, route }) => {
  const [isFetching, setIsFetching] = React.useState(true);

  const [fetchedFault, setFetchedFault] = React.useState({});
  const [err, setErr] = React.useState(null);

//   const authCtx = useContext(AuthContext);
  const faultId = route.params.faultId;

  React.useEffect(() => {
    async function getFaults() {
      setIsFetching(true);
      const faults = await getFaultById(faultId);
      if (faults === null) {
        // setErr("Error fetching faults");
        setFetchedFault("Error fetching faults");
        setIsFetching(false);
        return;
      }

      setIsFetching(false);
      setFetchedFault(faults);
    }

    getFaults();
  }, []);

  if (isFetching) {
    return <ActivityIndicator size="large" color={"#1E44FF"} />;
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
          <Text>{JSON.stringify(fetchedFault)}</Text>
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
};

export default FaultItemScreen;

import React from "react";
import { getFaultById } from "../../utilities/http";
import { View, Text, Button, ActivityIndicator, Image } from "react-native";
import TitleHeader from "../../components/headerTitle";

const FaultItemScreen = ({ navigation, route }) => {
  const [isFetching, setIsFetching] = React.useState(true);
  const [havePhoto, setHavePhoto] = React.useState(false);

  const [fetchedFault, setFetchedFault] = React.useState({});
  const [err, setErr] = React.useState(null);

  const faultId = route.params.faultId;

  React.useEffect(() => {
    async function getFault() {
      setIsFetching(true);
      const fault = await getFaultById(faultId);
      if (fault === null) {
        // setErr("Error fetching faults");
        setFetchedFault("Error fetching faults");
        setIsFetching(false);
        return;
      }
      if (fault.data?.fault.photo) {
        setHavePhoto(true);
        console.log("have photo");
      }

      setIsFetching(false);
      setFetchedFault(fault);
    }
    getFault();
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
        {!isFetching && !err && <Text>{JSON.stringify(fetchedFault)}</Text>}
        {!isFetching && !err && havePhoto && (
          <Image
            source={{
              uri:
                "https://fixit-gjwz.onrender.com/api/v1/image/" +
                fetchedFault.data?.fault.photo.split(".")[0],
            }}
            style={{ width: 200, height: 200 }}
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
};

export default FaultItemScreen;

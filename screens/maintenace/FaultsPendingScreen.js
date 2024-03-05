import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import {
  getBuildingsByMaintenanceId,
  getFaultsByBuildingIdAndStatus,
} from "../../utilities/http";
import { AuthContext } from "../../store/auth-context";
import { FlatList } from "react-native-gesture-handler";
import FaultsGrid from "../../components/FaultsGrid";
import ReloadButton from "../../components/buttons/ReloadButton";

function FaultsPendingScreen({ navigation }) {
  const [isFetching, setIsFetching] = React.useState(true);
  const [Faults, setFaults] = React.useState([]);
  const [numOfFaults, setNumOfFaults] = React.useState(0);

  const authCtx = useContext(AuthContext);

  React.useEffect(() => {
    setNumOfFaults(Faults.length);
    setIsFetching(false);
  }, [Faults]);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsFetching(true);
    setFaults([]);
    const response = await getBuildingsByMaintenanceId(authCtx.userId);
    const buildings = response.data.maintenance.buildings;
    await buildings.forEach(async (building) => {
      const faults = await getFaultsByBuildingIdAndStatus(
        building.buildingId,
        "pending"
      );
      setFaults((prev) => [...prev, ...faults]);
    });
    setIsFetching(false);
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 100,
        }}
      >
        <View style={{flexDirection:'row'}}>
        <Text style={styles.title}>Pending faults</Text>
        <ReloadButton onPress={() => fetchData()} />
        </View>
        {isFetching && <Text>Loading...</Text>}
        {!isFetching && <Text>{numOfFaults} faults</Text>}
        {!isFetching && (
          <FlatList
            data={Faults}
            keyExtractor={(item) => item.faultId}
            renderItem={({ item }) => (
              <FaultsGrid
                id={item._id}
                domain={item.domainNameEng}
                faultTypeName={item.faultTypeNameEng}
                location={item.spaceName}
                status={item.status}
                navigation={navigation}
              />
            )}
          />
        )}
      </View>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 20,
    margin: 10,
    fontWeight: "bold",
  },
  button: {
    margin: 10,
    padding: 10,
  },
};
export default FaultsPendingScreen;

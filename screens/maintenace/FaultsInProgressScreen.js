import React, { useContext } from "react";
import { View, Text } from "react-native";
import {
  getBuildingsByMaintenanceId,
  getFaultsByBuildingIdAndStatus,
} from "../../utilities/http";
import { AuthContext } from "../../store/auth-context";
import { FlatList } from "react-native-gesture-handler";
import FaultsGrid from "../../components/FaultsGrid";
import ReloadButton from "../../components/buttons/ReloadButton";

function FaultsInProgressScreen({ navigation }) {
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
        "in-progress"
      );
      setFaults((prev) => [...prev, ...faults]);
    });
    setIsFetching(false);
  };

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
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.title}>In-Progress faults</Text>
          <ReloadButton onPress={() => fetchData()} />
        </View>
        {isFetching && <Text>Loading...</Text>}
        {!isFetching && <Text>{numOfFaults} faults</Text>}
        {!isFetching && (
          <FlatList
            data={Faults}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <FaultsGrid
                id={item._id}
                domain={item.domainNameEng}
                faultTypeName={item.faultTypeNameEng}
                status={item.status}
                location={item.spaceName}
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
export default FaultsInProgressScreen;

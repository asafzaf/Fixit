import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import {
  getBuildingsByMaintenanceId,
  getFaultsByBuildingId,
} from "../../utilities/http";
import { AuthContext } from "../../store/auth-context";
import { FlatList } from "react-native-gesture-handler";
import BigSelectionButton from "../../components/buttons/BigSelectionButton";
import FaultsGrid from "../../components/FaultsGrid";

function FaultsByBuildingsScreen({ navigation }) {
  const [buildings, setBuildings] = React.useState([]);
  const [isFetching, setIsFetching] = React.useState(true);
  const [faults, setFaults] = React.useState([]);
  const [filteredFaults, setFilteredFaults] = React.useState([]);
  const [buildingSelected, setBuildingSelected] = React.useState(false);
  const [buildingName, setBuildingName] = React.useState("");
  const [buildingId, setBuildingId] = React.useState("");

  const authCtx = useContext(AuthContext);

  const setBuildingDataHandler = (buildingId, buildingName) => {
    setBuildingSelected(true);
    setBuildingName(buildingName);
    setBuildingId(buildingId);
  };

  const backToSelectBuildingHandler = () => {
    setIsFetching(true);
    setBuildingSelected(false);
    setBuildingName("");
    setBuildingId("");
    setIsFetching(false);
  };

  React.useEffect(async () => {
    let fauilts = [];
    const response = await getBuildingsByMaintenanceId(authCtx.userId);
    const buildings = response.data.maintenance.buildings;
    setBuildings(buildings);
    buildings.forEach(async (building) => {
      const faults = await getFaultsByBuildingId(building.buildingId);
      faults.map((data) => {
        fauilts.push(data);
      });
    });
    setFaults(fauilts);
    setIsFetching(false);
  }, []);

  React.useEffect(() => {
    setIsFetching(true);
    if (buildingSelected && buildingId) {
      let fauilts = faults.filter((fault) => fault.buildingId === buildingId);
      setFilteredFaults(fauilts);
    } else {
      setBuildingName("");
      setBuildingId("");
    }
    setIsFetching(false);
  }, [buildingId, buildingSelected]);

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
        <Text style={styles.title}>Faults By Buildings</Text>
        {isFetching && <Text>Loading...</Text>}
        {!isFetching && !buildingSelected && <Text>Select a building</Text>}
        {!isFetching && buildingSelected && (
          <Text>Faults - {buildingName}</Text>
        )}
        {!isFetching && !buildingSelected && (
          <FlatList
            data={buildings}
            key={(item) => item.buildingId}
            renderItem={({ item }) => (
              <BigSelectionButton
                style={{ padding: 10, fontSize: 18 }}
                onPress={() => {
                  setBuildingDataHandler(item.buildingId, item.buildingName);
                }}
                title={item.buildingName}
              >
                <Text>{item.buildingName}</Text>
              </BigSelectionButton>
            )}
            keyExtractor={(item) => item._id}
          />
        )}
        {!isFetching && buildingSelected && (
          <FlatList
            data={filteredFaults}
            key={(item) => item._id}
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
        )}
        {!isFetching && buildingSelected && (
          <View style={styles.button}>
            <Button
              style={styles.button}
              title="Back"
              onPress={backToSelectBuildingHandler}
            />
          </View>
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

export default FaultsByBuildingsScreen;

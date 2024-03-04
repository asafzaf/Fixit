import React, { useContext } from "react";
import { View, Text } from "react-native";
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
  const [buildingSelected, setBuildingSelected] = React.useState(false);
  const [buildingId, setBuildingId] = React.useState("");

  const authCtx = useContext(AuthContext);

  React.useEffect(() => {
    getBuildingsByMaintenanceId(authCtx.userId).then((data) => {
      setBuildings(data.data.maintenance.buildings);
      setIsFetching(false);
    });
  }, []);

  React.useEffect(() => {
    setIsFetching(true);
    if (buildingSelected && buildingId) {
      getFaultsByBuildingId(buildingId).then((data) => {
        setFaults(data);
        console.log("data", data);
        setIsFetching(false);
      });
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
        <Text>Faults By Buildings</Text>
        {isFetching && <Text>Loading...</Text>}
        {/* {!isFetching && <Text>{JSON.stringify(buildings)}</Text>} */}
        {!isFetching && !buildingSelected && (
          <FlatList
            data={buildings}
            renderItem={({ item }) => (
              <BigSelectionButton
                style={{ padding: 10, fontSize: 18 }}
                onPress={() => {
                  console.log("item.buildingId", item.buildingId);
                  setBuildingSelected(true);
                  setBuildingId(item.buildingId);
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
            data={faults}
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
      </View>
    </View>
  );
}

export default FaultsByBuildingsScreen;

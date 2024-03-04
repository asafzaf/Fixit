import React, { useContext, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { AuthContext } from "../../store/auth-context";
import { styles } from "../../styles";
import StatusChart from "../../components/Maintenace/StatusChart";
import { ScrollView } from "react-native-gesture-handler";
import {
  getBuildingsByMaintenanceId,
  getFaultsByBuildingId,
} from "../../utilities/http";

const MaintenaceHomeScreen = ({ navigation }) => {
  const [faults, setFaults] = React.useState([]);
  const [isFetching, setIsFetching] = React.useState(true);

  const authCtx = useContext(AuthContext);

  useEffect(async () => {
    let buildingsIds = [];
    let faults = [];
    const result = await getBuildingsByMaintenanceId(authCtx.userId);
    // console.log(data);
    result.data.maintenance.buildings.map((building) => {
      buildingsIds.push(building.buildingId);
    });
    buildingsIds.map(async (id) => {
      const res = await getFaultsByBuildingId(id);
      if (res.data.fa.length === 0)
        await res.map((fault) => {
          faults.push(fault);
        });
    });
    setFaults(faults);
    setIsFetching(false);
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.small_title}>Hello, {authCtx.userName}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.small_title}>Maintenance Home Screen</Text>
        <StatusChart />
        {isFetching && <Text>Loading...</Text>}
        {!isFetching && <Text>{JSON.stringify(faults)}</Text>}
        {/* {faults.map((fault) => {
          return (
            <View key={fault._id}>
              <Text>{fault.faultTypeNameEng}</Text>
              <Text>{fault.spaceName}</Text>
            </View>
          );
        })} */}
      </View>
    </ScrollView>
  );
};

export default MaintenaceHomeScreen;

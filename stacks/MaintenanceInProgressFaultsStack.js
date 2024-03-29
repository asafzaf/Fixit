import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

import FaultsInProgressScreen from "../screens/maintenace/FaultsInProgressScreen";
import MaintenanceFaultItemScreen from "../screens/maintenace/MaintenanceFaultItemScreen";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();

function MaintenanceInProgressFaultsStack() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack.Navigator>
        <Stack.Screen name="InProgressFaults" title="InProgress Faults" component={FaultsInProgressScreen} />
        <Stack.Screen name="FaultItem" title="Fault Item" component={MaintenanceFaultItemScreen} />
      </Stack.Navigator>
    </>
  );
}

export default MaintenanceInProgressFaultsStack;

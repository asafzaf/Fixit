import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

import FaultsClosedScreen from "../screens/maintenace/FaultsClosedScreen";
import MaintenanceFaultItemScreen from "../screens/maintenace/MaintenanceFaultItemScreen";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();

function MaintenanceClosedFaultsStack() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack.Navigator>
        <Stack.Screen name="ClosedFaults" title="Closed Faults" component={FaultsClosedScreen} />
        <Stack.Screen name="FaultItem" title="Fault Item" component={MaintenanceFaultItemScreen} />
      </Stack.Navigator>
    </>
  );
}

export default MaintenanceClosedFaultsStack;

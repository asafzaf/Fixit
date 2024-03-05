import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

import FaultItemScreen from "../screens/status/FaultItemScreen";
import FaultsInProgressScreen from "../screens/maintenace/FaultsInProgressScreen";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();

function MaintenanceInProgressFaultsStack() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack.Navigator>
        <Stack.Screen name="InProgressFaults" title="InProgress Faults" component={FaultsInProgressScreen} />
        <Stack.Screen name="FaultItem" title="Fault Item" component={FaultItemScreen} />
      </Stack.Navigator>
    </>
  );
}

export default MaintenanceInProgressFaultsStack;

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

import FaultsPendingScreen from "../screens/maintenace/FaultsPendingScreen";
import MaintenanceFaultItemScreen from "../screens/maintenace/MaintenanceFaultItemScreen";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();

function MaintenancePendingFaultsStack() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack.Navigator>
        <Stack.Screen
          name="PendingFaults"
          title="Pending Faults"
          component={FaultsPendingScreen}
        />
        <Stack.Screen
          name="FaultItem"
          title="Fault Item"
          component={MaintenanceFaultItemScreen}
        />
      </Stack.Navigator>
    </>
  );
}

export default MaintenancePendingFaultsStack;

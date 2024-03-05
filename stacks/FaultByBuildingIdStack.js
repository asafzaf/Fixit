import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

import FaultsByBuildingsScreen from "../screens/maintenace/FaultsByBuildingsScreen";
import FaultItemScreen from "../screens/status/FaultItemScreen";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();

function FaultByBuildingIdStack() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack.Navigator>
        <Stack.Screen name="Fault by buildings" title="Fault by buildings" component={FaultsByBuildingsScreen} />
        <Stack.Screen name="FaultItem" title="Fault Item" component={FaultItemScreen} />
      </Stack.Navigator>
    </>
  );
}

export default FaultByBuildingIdStack;

import "react-native-gesture-handler";
import React, { useContext } from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from "../../store/auth-context";
import IconButton from "../../components/buttons/IconButton";

import MaintenaceHomeScreen from "../../screens/maintenace/MaintenaceHomeScreen";
import HomeScreenUser from "../../screens/home/HomeScreenUser";
import FaultByBuildinsScreen from "../../screens/maintenace/FaultsByBuildingsScreen";
import HomeScreenStack from "../HomeScreenStack";
import FaultByBuildingIdStack from "../FaultByBuildingIdStack";
import MaintenancePendingFaultsStack from "../MaintenancePendingFaultsStack";
import MaintenanceInProgressFaultsStack from "../MaintenanceInProgressFaultsStack";
import MaintenanceClosedFaultsStack from "../MaintenanceClosedFaultsStack";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function MaintenaceDrawer() {
  const authCtx = useContext(AuthContext);
  return (
    <>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Welcome"
          component={MaintenaceHomeScreen}
          options={{
            title: "Home",
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="Faults"
          component={HomeScreenStack}
          options={{
            title: "Faults",
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="Pending Faults"
          component={MaintenancePendingFaultsStack}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="In Progress Faults"
          component={MaintenanceInProgressFaultsStack}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Closed Faults"
          component={MaintenanceClosedFaultsStack}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Faults by Building"
          component={FaultByBuildingIdStack}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    </>
  );
}

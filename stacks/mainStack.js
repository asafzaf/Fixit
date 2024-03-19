import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

import HistoryScreen from "../screens/history/historyScreen";
import StatusScreen from "../screens/status/statusScreen";
import FaultItemScreen from "../screens/status/FaultItemScreen";
import FaultEditForm from "../components/FaultEditForm";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack.Navigator>
        <Stack.Screen
          name="History"
          title="Faults History"
          component={HistoryScreen}
        />
        <Stack.Screen
          name="Status"
          title="Faults Status"
          component={StatusScreen}
        />
        <Stack.Screen
          name="FaultItem"
          title="Fault Item"
          component={FaultItemScreen}
        />
        <Stack.Screen
          name="EditItem"
          title="Fault Edit"
          component={FaultEditForm}
        />
      </Stack.Navigator>
    </>
  );
}

export default MainStack;

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

import HistoryScreen from "../screens/history/historyScreen";
import StatusScreen from "../screens/status/statusScreen";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack.Navigator>
        <Stack.Screen name="History" component={HistoryScreen} />
        <Stack.Screen name="Status" component={StatusScreen} />
      </Stack.Navigator>
    </>
  );
}

export default MainStack;

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";

import HistoryScreen from "../screens/history/historyScreen";
import StatusScreen from "../screens/status/statusScreen";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();

function MainStack() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="History" component={HistoryScreen} />
          <Stack.Screen name="Status" component={StatusScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreenUser from "../screens/home/HomeScreenUser";
import NewFaultRoot from "./NewFaultStack";
import MainStack from "./MainStack";

const Stack = createNativeStackNavigator();

export default function HomeScreenStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreenUser}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="MainStack"
        title=""
        component={MainStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Root"
        title="Open New Fault"
        component={NewFaultRoot}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

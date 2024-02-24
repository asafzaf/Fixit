import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreenUser from "../screens/home/HomeScreenUser";
import NewFaultRoot from "./NewFaultStack";
import MainStack from "./MainStack";
import IconButton from "../components/buttons/IconButton";
import { AuthContext } from "../store/auth-context";

const Stack = createNativeStackNavigator();

export default function HomeScreenStack() {
  const authCtx = useContext(AuthContext);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreenUser}
        options={{
          title: "",
          headerRight: () => (
            <IconButton
              icon="exit"
              color="#0D24F1"
              size={24}
              onPress={authCtx.logout}
            />
          ),
        }}
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

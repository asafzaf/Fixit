import * as React from "react";
import InsidePlaceScreen from "../screens/newFault/InsidePlaceScreen";
import OutsidePlaceScreen from "../screens/newFault/OutsidePlaceScreen";
import NewFaultScreen from "../screens/newFault/NewFaultScreens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function NewFaultRoot({ navigation }) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Open Fault"
          title="פתיחת תקלה חדשה"
          component={NewFaultScreen}
          options={{ headerShown: true, title: "פתיחת תקלה חדשה" }}
        />
        <Stack.Screen
          name="Inside"
          title="בפנים"
          component={InsidePlaceScreen}
          options={{ title: "תקלה בתוך מבנה" }}
        />
        <Stack.Screen
          name="Outside"
          title="בחוץ"
          component={OutsidePlaceScreen}
          options={{ title: "תקלה מחוץ למבנה" }}
        />
      </Stack.Navigator>
    );
  }
export default NewFaultRoot;   
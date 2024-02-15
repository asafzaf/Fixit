import * as React from "react";
import InsidePlaceScreen from "../screens/newFault/InsidePlaceScreen";
import OutsidePlaceScreen from "../screens/newFault/OutsidePlaceScreen";
import NewFaultScreen from "../screens/newFault/NewFaultScreens";
import SpaceChooseScreen from "../screens/newFault/SpaceChooseScreen";
import FaultChooseScreen from "../screens/newFault/FaultChooseScreen";
import ConfirmFaultScreen from "../screens/newFault/ConfirmFaultScreen";
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
          options={{ title: "פתיחת תקלה חדשה" }}
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
        <Stack.Screen 
          name="SpaceChooser"
          title="בחר מרחב"
          component={SpaceChooseScreen}
          options={{ title: "בחר מרחב" }}
        />
        <Stack.Screen
        name="FaultChoose"
        title="בחר תקלה"
        component={FaultChooseScreen}
        options={{ title: "בחר תקלה" }}
        />
        <Stack.Screen
        name="Confirm"
        title="אישור"
        component={ConfirmFaultScreen}
        options={{ title: "אישור" }}
        />
      </Stack.Navigator>
    );
  }
export default NewFaultRoot;   
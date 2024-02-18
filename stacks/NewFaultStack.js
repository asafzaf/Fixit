import * as React from "react";
import insideBuilding from "../screens/newFault/insideBuilding";
import OutsidePlaceScreen from "../screens/newFault/OutsidePlaceScreen";
import insideOrOutside from "../screens/newFault/insideOrOutside";
import spaceInBuilding from "../screens/newFault/spaceInBuilding";
import FaultChooseScreen from "../screens/newFault/FaultChooseScreen";
import ConfirmFaultScreen from "../screens/newFault/ConfirmFaultScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OpenNewFaultScreen from "../screens/newFault/OpenNewFaultScreen";

const Stack = createNativeStackNavigator();

function NewFaultRoot({ navigation }) {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name="Open Fault"
        title="Open New Fault"
        component={OpenNewFaultScreen}
        options={{ title: "Open New Fault" }}
      /> */}
      <Stack.Screen
        name="Open Fault"
        title="Open New Fault"
        component={insideOrOutside}
        options={{ title: "Open New Fault" }}
      />
      <Stack.Screen
        name="Inside"
        title="Inside"
        component={insideBuilding}
        options={{ title: "I'm Inside" }}
      />
      <Stack.Screen
        name="Outside"
        title="Outside"
        component={OutsidePlaceScreen}
        options={{ title: "Outside Fault" }}
      />
      <Stack.Screen
        name="SpaceChooser"
        title="Choose Space"
        component={spaceInBuilding}
        options={{ title: "Choose Space" }}
      />
      <Stack.Screen
        name="FaultChoose"
        title="Choose Fault Type"
        component={FaultChooseScreen}
        options={{ title: "Choose Fault Type" }}
      />
      <Stack.Screen
        name="Confirm"
        title="Fault Confirmation"
        component={ConfirmFaultScreen}
        options={{ title: "Confirm" }}
      />
    </Stack.Navigator>
  );
}
export default NewFaultRoot;

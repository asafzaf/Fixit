import * as React from "react";
import insideBuilding from "../screens/newFault/insideBuilding";
import OutsidePlaceScreen from "../screens/newFault/OutsidePlaceScreen";
import insideOrOutside from "../screens/newFault/insideOrOutside";
import spaceInBuilding from "../screens/newFault/spaceInBuilding";
import FaultChooseScreen from "../screens/newFault/FaultChooseScreen";
import ConfirmFaultScreen from "../screens/newFault/ConfirmFaultScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import specificSpaceInBuilding from "../screens/newFault/specificSpaceInBuilding";
import OutsideSpaceScreen from "../screens/newFault/OutsideSpaceScreen";

const Stack = createNativeStackNavigator();

function NewFaultRoot({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Open Fault"
        title="Open New Fault"
        component={insideOrOutside}
        options={{ title: "Step 1" }}
      />
      <Stack.Screen
        name="Inside"
        title="Inside"
        component={insideBuilding}
        options={{ title: "Step 2" }}
      />
      <Stack.Screen
        name="Outside"
        title="Outside"
        component={OutsidePlaceScreen}
        options={{ title: "Step 2" }}
      />
      <Stack.Screen
        name="SpaceTypeChooser"
        title="Choose Space"
        component={spaceInBuilding}
        options={{ title: "Step 3" }}
      />
      <Stack.Screen
        name="OutsideSpace"
        title="OutsideSpace"
        component={OutsideSpaceScreen}
        options={{ title: "Step 3" }}
      />
      <Stack.Screen
        name="SpaceChooser"
        title="Choose Space"
        component={specificSpaceInBuilding}
        options={{ title: "Step 4" }}
      />
      <Stack.Screen
        name="FaultChoose"
        title="Choose Fault Type"
        component={FaultChooseScreen}
        options={{ title: "Step 5" }}
      />
      <Stack.Screen
        name="Confirm"
        title="Fault Confirmation"
        component={ConfirmFaultScreen}
        options={{ title: "Step 6" }}
      />
    </Stack.Navigator>
  );
}
export default NewFaultRoot;

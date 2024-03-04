import "react-native-gesture-handler";
import React, { useContext } from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthContext } from "../store/auth-context";
import IconButton from "../components/buttons/IconButton";

import MaintenaceHomeScreen from "../screens/maintenace/MaintenaceHomeScreen";
import HomeScreenUser from "../screens/home/HomeScreenUser";
import FaultByBuildinsScreen from "../screens/status/FaultsByBuildingsScreen";
import HomeScreenStack from "./HomeScreenStack";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// export default function MaintenaceStack() {
//   const authCtx = useContext(AuthContext);
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Welcome"
//         component={MaintenaceHomeScreen}
//         options={{
//           title: "",
//           headerRight: () => (
//             <IconButton
//               icon="exit"
//               color="#0D24F1"
//               size={24}
//               onPress={authCtx.logout}
//             />
//           ),
//         }}
//       />
//       <Stack.Screen
//         name="Faults"
//         component={HomeScreenUser}
//         options={{
//           title: "Faults",
//         }}
//       />
//     </Stack.Navigator>
//   );
// }

export default function MaintenaceStack() {
  const authCtx = useContext(AuthContext);
  return (
    <>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Welcome"
          component={MaintenaceHomeScreen}
          options={{
            title: "Home",
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
        <Drawer.Screen
          name="Faults"
          component={HomeScreenStack}
          options={{
            title: "Faults",
          }}
        />
        <Drawer.Screen
          name="Faults by Building"
          component={FaultByBuildinsScreen}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    </>
  );
}

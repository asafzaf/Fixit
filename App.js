import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";

import HomeScreenStack from "./stacks/HomeScreenStack";

function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <HomeScreenStack />
      </NavigationContainer>
    </>
  );
}

export default App;

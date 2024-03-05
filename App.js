import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { useContext } from "react";

import HomeScreenStack from "./stacks/HomeScreenStack";
import AuthStack from "./stacks/AuthStack";
import AuthContextProvider, { AuthContext } from "./store/auth-context";
import MaintenaceDrawer from "./stacks/drawers/MaintenaceDrawer";

function Navigation() {
  const authCtx = useContext(AuthContext);
  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && !authCtx.isMaintenace && <HomeScreenStack />}
      {authCtx.isAuthenticated && authCtx.isMaintenace && <MaintenaceDrawer />}
    </NavigationContainer>
  );
}

function App() {
  return (
    <>
      <StatusBar style="dark" />
      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
    </>
  );
}

export default App;

import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { useContext } from "react";

import HomeScreenStack from "./stacks/HomeScreenStack";
import AuthStack from "./stacks/AuthStack";
import AuthContextProvider, { AuthContext } from "./store/auth-context";

function Navigation() {
  const authCtx = useContext(AuthContext);
  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <HomeScreenStack />}
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

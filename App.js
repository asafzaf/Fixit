import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import NewFaultRoot from "./stacks/NewFaultStack";
import HomePageBtn from "./components/buttons/HomePageBtn";
import FixitHeader from "./components/header";

function HomeScreen({ navigation }) {
  return (
    <View style={{ alignItems: "center", justifyContent: "flex-start" }}>
      <FixitHeader></FixitHeader>
      <View
        style={{
          marginTop: 100,
          height: "50%",
          flex: 1,
          justifyContent: "space-between",
          gap: 100,
        }}
      >
        <HomePageBtn
          colors={["#0100D8", "#3C3BFA"]}
          logo={require("./assets/Tools-01.png")}
          title="Open New Fault"
          onPress={() => navigation.navigate("Root", { screen: "Open Fault" })}
        ></HomePageBtn>
        <HomePageBtn
          colors={["#0100D8", "#3C3BFA"]}
          logo={require("./assets/Tools-01.png")}
          title="Faults Status"
          onPress={() => navigation.navigate("Root", { screen: "Open Fault" })}
        ></HomePageBtn>
        <HomePageBtn
          colors={["#0100D8", "#3C3BFA"]}
          logo={require("./assets/Tools-01.png")}
          title="History"
          onPress={() => navigation.navigate("Root", { screen: "Open Fault" })}
        ></HomePageBtn>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Home Page" }}
          />
          <Stack.Screen
            name="Root"
            title="Open New Fault"
            component={NewFaultRoot}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;

import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import NewFaultRoot from "./stacks/NewFaultStack";
import MainStack from "./stacks/mainStack";
import HomePageBtn from "./components/buttons/HomePageBtn";
import FixitHeader from "./components/header";

function HomeScreen({ navigation }) {
  // function pressHistoryHandler() {
  //   navigation.navigate("History");
  // }
  // function pressStatusHandler() {
  //   navigation.navigate("Status");
  // }
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <FixitHeader></FixitHeader>
      <View
        style={{
          flex: 1,
          margin: 100,
        }}
      >
        <View>
          <HomePageBtn
            colors={["#0100D8", "#3C3BFA"]}
            logo={require("./assets/addFaultIcon.png")}
            title="Open New Fault"
            onPress={() =>
              navigation.navigate("Root", { screen: "Open Fault" })
            }
          ></HomePageBtn>
          <HomePageBtn
            colors={["#0100D8", "#3C3BFA"]}
            logo={require("./assets/statusIcon.png")}
            title="Faults Status"
            // onPress={pressStatusHandler}
            // onPress={() =>
            //   navigation.navigate("mainStack", { screen: "Status" })
            // }
          ></HomePageBtn>
          <HomePageBtn
            colors={["#0100D8", "#3C3BFA"]}
            logo={require("./assets/historyIcon.png")}
            title="History"
            // onPress={pressHistoryHandler}
            // onPress={() =>
            //   navigation.navigate("mainStack", { screen: "History" })
            // }
          ></HomePageBtn>
        </View>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "" }}
          />
          {/* <Stack.Screen
            name="mainStack"
            title=""
            component={MainStack}
            options={{ headerShown: false }}
          /> */}
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

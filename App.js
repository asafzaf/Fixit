import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import NewFaultRoot from "./stacks/NewFaultStack";
import MainStack from "./stacks/mainStack";
import HomePageBtn from "./components/buttons/HomePageBtn";
import FixitHeader from "./components/header";

function HomeScreen({ navigation }) {
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
          margin: 50,
        }}
      >
        <View
          style={{
            marginBottom: 150,
          }}
        >
          <ScrollView>
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
              onPress={() =>
                navigation.navigate("MainStack", { screen: "Status" })
              }
            ></HomePageBtn>
            <HomePageBtn
              colors={["#0100D8", "#3C3BFA"]}
              logo={require("./assets/historyIcon.png")}
              title="History"
              onPress={() =>
                navigation.navigate("MainStack", { screen: "History" })
              }
            ></HomePageBtn>
          </ScrollView>
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
          <Stack.Screen
            name="MainStack"
            title=""
            component={MainStack}
            options={{ headerShown: false }}
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

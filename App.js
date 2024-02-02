import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import InsidePlaceScreen from "./screens/newFault/InsidePlaceScreen";
import OutsidePlaceScreen from "./screens/newFault/OutsidePlaceScreen";
import NewFaultScreen from "./screens/newFault/NewFaultScreens";
import NewFaultRoot from "./stacks/NewFaultStack";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>ברוך הבא!</Text>
      <Button
        title="פתח תקלה חדשה"
        onPress={() => navigation.navigate("Root", { screen: "Open Fault" })}
      />
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
            options={{ title: "Overview" }}
          />
          <Stack.Screen
            name="Root"
            title="פתיחת תקלה חדשה"
            component={NewFaultRoot}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

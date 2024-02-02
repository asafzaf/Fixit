import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import NewFaultRoot from "./stacks/NewFaultStack";
import BigSelectionButton from "./components/buttons/BigSelectionButton";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>ברוך הבא!</Text>
      <BigSelectionButton
        colors={["#E15954","#FD5B5B"]}
        logo={require('./assets/Tools-01.png')}
        title="פתח תקלה חדשה"
        onPress={() => navigation.navigate("Root", { screen: "Open Fault" })}
      ></BigSelectionButton>
      
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
            options={{ headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
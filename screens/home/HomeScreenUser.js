import React from "react";
import { View, ScrollView } from "react-native";
import HomePageBtn from "../../components/buttons/HomePageBtn";
import FixitHeader from "../../components/header";

function HomeScreenUser({ navigation }) {
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
              logo={require("../../assets/addFaultIcon.png")}
              title="Open New Fault"
              onPress={() =>
                navigation.navigate("Root", { screen: "Open Fault" })
              }
            ></HomePageBtn>
            <HomePageBtn
              colors={["#0100D8", "#3C3BFA"]}
              logo={require("../../assets/statusIcon.png")}
              title="Faults Status"
              onPress={() =>
                navigation.navigate("MainStack", { screen: "Status" })
              }
            ></HomePageBtn>
            <HomePageBtn
              colors={["#0100D8", "#3C3BFA"]}
              logo={require("../../assets/historyIcon.png")}
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

export default HomeScreenUser;

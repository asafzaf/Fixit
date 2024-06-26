import React, { useContext } from "react";
import { View, ScrollView } from "react-native";
import HomePageBtn from "../../components/buttons/HomePageBtn";
import FixitHeader from "../../components/header";
import { AuthContext } from "../../store/auth-context";
import { Text } from "react-native";

function HomeScreenUser({ navigation }) {
  const authCtx = useContext(AuthContext);

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
        <Text
          style={{
            fontSize: 22,
            fontWeight: 700,
            marginBottom: 20,
            textAlign: "center",
          }}
        >
          Hello {authCtx.userName}!
        </Text>
        <View
          style={{
            width: "100vw",
          }}
        >
          <ScrollView style={{ width: "100%", height: "100%" }}>
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

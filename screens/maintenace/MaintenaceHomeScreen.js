import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { AuthContext } from "../../store/auth-context";
import { styles } from "../../styles";
import StatusChart from "../../components/Maintenace/StatusChart";
import { ScrollView } from "react-native-gesture-handler";

const MaintenaceHomeScreen = ({ navigation }) => {
  const authCtx = useContext(AuthContext);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.small_title}>Hello, {authCtx.userName}</Text> 
      </View>
      <View style={styles.container}>
        <Text style={styles.small_title}>Maintenance Home Screen</Text>
        <StatusChart />
      </View>
    </ScrollView>
  );
};

export default MaintenaceHomeScreen;

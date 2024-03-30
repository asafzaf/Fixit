import React, { useContext, useEffect } from "react";
import { View, Text } from "react-native";
import { AuthContext } from "../../store/auth-context";
import { styles } from "../../styles";
import StatusChart from "../../components/Maintenace/StatusChart";
import { ScrollView } from "react-native-gesture-handler";

const MaintenaceHomeScreen = ({ navigation }) => {
  const [faults, setFaults] = React.useState([]);
  const [isFetching, setIsFetching] = React.useState(true);

  const authCtx = useContext(AuthContext);

  return (
    <View style={{ backgroundColor: "transparent" }}>
      <ScrollView>
        <View
          style={[
            styles.container,
            { marginTop: 70, backgroundColor: "transparent" },
          ]}
        >
          <Text style={styles.small_title}>Hello {authCtx.userName} !</Text>
        </View>
        <View style={[styles.container, { backgroundColor: "transparent" }]}>
          <StatusChart />
          {isFetching && <Text>Loading...</Text>}
        </View>
      </ScrollView>
    </View>
  );
};

export default MaintenaceHomeScreen;

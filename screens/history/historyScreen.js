import { Button, Text, View } from "react-native";
import * as React from "react";
import { styles } from "../../styles";
import TitleHeader from "../../components/headerTitle";
import faultsList from "../../data/faultsDUMMY.json";

function HistoryScreen({ navigation }) {
  return (
    <View
      style={{ flex: 1, alignItems: "center", justifyContent: "flex-start" }}
    >
      <TitleHeader title={"History"}></TitleHeader>
      <View>
        {faultsList.data.faults.map((fault) => (
          <View>
            <Text style={styles.small_title}>{"ID: " + fault._id}</Text>
            <Text style={styles.small_title}>
              {"Type: " + fault.typeNameEng}
            </Text>
            {/* {building} */}
          </View>
        ))}
      </View>
      <Button
        title="Back To Home Screen"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

export default HistoryScreen;

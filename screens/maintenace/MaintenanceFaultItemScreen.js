import React, { useContext } from "react";
import { AuthContext } from "../../store/auth-context";
import {
  getFaultById,
  updateToInProgress,
  updateToClosed,
} from "../../utilities/http";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  ActivityIndicator,
  Image,
} from "react-native";
import TitleHeader from "../../components/headerTitle";

const MaintenanceFaultItemScreen = ({ navigation, route }) => {
  const [isFetching, setIsFetching] = React.useState(true);
  const [havePhoto, setHavePhoto] = React.useState(false);

  const [fetchedFault, setFetchedFault] = React.useState({});
  const [err, setErr] = React.useState(null);

  const authCtx = useContext(AuthContext);

  const faultId = route.params.faultId;
  const faultStatus = route.params.faultStatus;

  React.useEffect(() => {
    async function getFault() {
      setIsFetching(true);
      const fault = await getFaultById(faultId);
      if (fault === null) {
        setFetchedFault("Error fetching faults");
        setIsFetching(false);
        return;
      }
      if (fault.data?.fault.photo) {
        setHavePhoto(true);
      }

      setIsFetching(false);
      setFetchedFault(fault);
    }
    getFault();
  }, []);

  if (isFetching) {
    return (
      <ActivityIndicator
        size="large"
        color={"#1E44FF"}
        style={styles.loading}
      />
    );
  }

  const changeStatusButton = () => {
    if (faultStatus === "pending") {
      return (
        <Button
          title="Aprove"
          onPress={() => {
            updateToInProgress(faultId, authCtx.userId);
            navigation.popToTop();
          }}
        />
      );
    } else if (faultStatus === "in-progress") {
      return (
        <Button
          title="Complete"
          onPress={() => {
            updateToClosed(faultId, authCtx.userId);
            navigation.popToTop();
          }}
        />
      );
    } else {
      return null;
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TitleHeader title={"Fault Details"}></TitleHeader>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View
          contentContainerStyle={{ width: "100%", justifyContent: "center" }}
        >
          {err && <Text>{err}</Text>}
          {!isFetching && !err && (
            <View style={styles.text_container}>
              <Text style={styles.text_primary}></Text>
              <View style={styles.text_container_secondary}>
                <Text style={styles.text_secondary}>Building:</Text>
                <Text style={styles.text_primary}>
                  {fetchedFault.data?.fault.buildingName}
                </Text>
              </View>
              <View style={styles.text_container_secondary}>
                <Text style={styles.text_secondary}>Floor Number:</Text>
                <Text style={styles.text_primary}>
                  {fetchedFault.data?.fault.floor}
                </Text>
              </View>
              <View style={styles.text_container_secondary}>
                <Text style={styles.text_secondary}>Outdoor:</Text>
                <Text style={styles.text_primary}>
                  {fetchedFault.data?.fault.outSideName}
                </Text>
              </View>
              <View style={styles.text_container_secondary}>
                <Text style={styles.text_secondary}>Fault:</Text>
                <Text style={styles.text_primary}>
                  {fetchedFault.data?.fault.faultTypeNameEng}
                </Text>
              </View>
              <View style={styles.text_container_secondary}>
                <Text style={styles.text_secondary}>Space:</Text>
                <Text style={styles.text_primary}>
                  {fetchedFault.data?.fault.spaceTypeNameEng}
                </Text>
              </View>
              <View style={styles.text_container_secondary}>
                <Text style={styles.text_secondary}>Fault Description:</Text>
                <Text style={styles.text_primary}>
                  {fetchedFault.data?.fault.description}
                </Text>
              </View>
              <View style={styles.text_container_secondary}>
                <Text style={styles.text_secondary}>Fault Status:</Text>
                <Text style={styles.text_primary}>
                  {fetchedFault.data?.fault.status}
                </Text>
              </View>
            </View>
          )}
          {!isFetching && !err && havePhoto && (
            <View>
              <View style={styles.image_container}>
                <Text style={styles.text_secondary}>Fault Image:</Text>
                {/* </View> */}
                <Image
                  source={{
                    uri: fetchedFault.data?.fault.photo,
                  }}
                  style={{
                    width: 200,
                    height: 200,
                    marginTop: 20,
                    marginBottom: 20,
                    borderRadius: 10,
                  }}
                />
              </View>
            </View>
          )}
          <View style={{ marginBottom: 70 }}>{changeStatusButton()}</View>
        </View>
      </ScrollView>
      <View style={{ marginBottom: 70 }}>
        <Button title="Go Back" onPress={() => navigation.popToTop()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "85%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text_container: {},
  text_container_secondary: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    backgroundColor: "white",
    padding: 5,
    paddingLeft: 20,
    width: 300,
    height: 70,
    borderRadius: 10,
    margin: 5,
    alignItems: "center",
    alignContent: "center",
    flexWrap: "wrap",
  },
  text_secondary: {
    fontWeight: "bold",
    fontSize: 20,
  },
  image_container: {
    position: "relative",

    backgroundColor: "white",
    padding: 5,
    paddingLeft: 20,
    width: 300,
    borderRadius: 10,
    margin: 5,
  },
  text_primary: {
    fontSize: 18,
  },
});

export default MaintenanceFaultItemScreen;

import React from "react";
import { getFaultById } from "../../utilities/http";
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

const FaultItemScreen = ({ navigation, route }) => {
  const [isFetching, setIsFetching] = React.useState(true);
  const [havePhoto, setHavePhoto] = React.useState(false);

  const [fetchedFault, setFetchedFault] = React.useState({});
  const [err, setErr] = React.useState(null);

  const faultId = route.params.faultId;

  const displayUrgency = (urgency) => {
    // const urgency = fetchedFault.data?.fault.urgency;
    if (urgency === 1) {
      return "Lowest";
    } else if (urgency === 2) {
      return "Low";
    } else if (urgency === 3) {
      return "Medium";
    } else if (urgency === 4) {
      return "High";
    } else if (urgency === 5) {
      return "Critical";
    }
  };

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
      console.log(fetchedFault.data?.fault.photo);
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

  let statusVar =
    fetchedFault.data?.fault.status.toLowerCase() === "pending" ? true : false;

  if (fetchedFault.data?.fault.buildingName) {
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
                  <Text style={styles.text_secondary}>Fault Status:</Text>
                  <Text style={styles.text_primary}>
                    {fetchedFault.data?.fault.status}
                  </Text>
                </View>
                <View style={styles.text_container_description}>
                  <Text style={styles.text_secondary}>Fault Description:</Text>
                  <View style={styles.text_container_third}>
                    <Text style={styles.text_primary}>
                      {fetchedFault.data?.fault.description}
                    </Text>
                  </View>
                </View>
              </View>
            )}
            {!isFetching && !err && havePhoto && (
              <View>
                <View style={styles.image_container}>
                  <Text style={styles.text_secondary}>Fault Image:</Text>
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
            {statusVar && (
            <View style={{ marginTop: 20 }}>
              <Button
                title="Edit Fault"
                onPress={() =>
                  navigation.navigate("EditItem", {
                    faultData: fetchedFault.data.fault,
                  })
                }
              ></Button>
            </View>
          )}
          </View>
        </ScrollView>
        <View style={{ marginBottom: 70 }}>
          <Button title="Go Back" onPress={() => navigation.popToTop()} />
        </View>
      </View>
    );
  }
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
                <Text style={styles.text_secondary}>Fault Status:</Text>
                <Text style={styles.text_primary}>
                  {fetchedFault.data?.fault.status}
                </Text>
              </View>
              <View style={styles.text_container_secondary}>
                <Text style={styles.text_secondary}>Fault Urgency:</Text>
                <Text style={styles.text_primary}>
                  {displayUrgency(fetchedFault.data?.fault.urgency)}
                </Text>
              </View>
              <View style={styles.text_container_description}>
                <Text style={styles.text_secondary}>Fault Description:</Text>
                <View style={styles.text_container_third}>
                  <Text style={styles.text_primary}>
                    {fetchedFault.data?.fault.description}
                  </Text>
                </View>
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
                    uri:
                      // "https://fixit-gjwz.onrender.com/api/v1/image/" +
                      fetchedFault.data?.fault.photo,
                    // .split(".")
                    // [0],
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
          {statusVar && (
            <View style={{ marginTop: 20 }}>
              <Button
                title="Edit Fault"
                onPress={() =>
                  navigation.navigate("EditItem", {
                    faultData: fetchedFault.data.fault,
                  })
                }
              ></Button>
            </View>
          )}
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
  text_container_third: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    flexWrap: "wrap",
    marginTop: 7,
  },
  text_container_description: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    padding: 5,
    paddingLeft: 20,
    width: 300,
    height: 100,
    borderRadius: 10,
    margin: 5,
    flexWrap: "wrap",
  },
  text_secondary: {
    fontWeight: "bold",
    fontSize: 20,
  },
  text_third: {
    fontSize: 18,
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

export default FaultItemScreen;

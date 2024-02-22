import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
// import faultCollection from "../../data/faultDomainsDUMMY.json";
import { LinearGradient } from "expo-linear-gradient";
import TitleHeader from "../../components/headerTitle";
import { getAllFaultDomains } from "../../utilities/http";
import LoadingOverlay from "../../components/UI/LoadingOverlay";

const FaultChooseScreen = ({ navigation, route }) => {
  const buildingId = route.params.buildingId;
  const buildingName = route.params.buildingName;
  const spaceId = route.params.spaceId;
  const spaceName = route.params.spaceName;
  const spaceTypeId = route.params.spaceTypeId;
  const spaceTypeName = route.params.spaceTypeName;
  const spaceTypeNameHebrew = route.params.spaceTypeNameHebrew;

  const [name, setName] = useState("");
  const [pickedDomain, setPickedDomain] = useState("");
  const [name2, setName2] = useState("");

  const [isFetching, setIsFetching] = React.useState(true);

  const [fetchedFaultDomains, setfetchedFaultDomains] = useState([]);

  useEffect(() => {
    async function getDomains() {
      setIsFetching(true);

      const domains = await getAllFaultDomains();
      setIsFetching(false);

      setfetchedFaultDomains(domains);
    }

    getDomains();
  }, []);

  if (isFetching) {
    return <LoadingOverlay />;
  }
  const domainObjList = fetchedFaultDomains;

  const pickDomain = (domainObj) => {
    const domain = domainObjList.find(
      (domain) => domain.name === domainObj.name
    );
    setPickedDomain(domain);
  };

  const filterSuggestions = (text) => {
    //Domain
    const lowerCaseText = text.toLowerCase();
    const objects = domainObjList.filter((domain) =>
      domain.name.toLowerCase().includes(lowerCaseText)
    );
    return objects;
  };

  const filterSuggestions2 = (domain, text) => {
    //SubDomain
    const lowerCaseText = text.toLowerCase();
    const objects = domain.types.filter((fault) =>
      fault.name.toLowerCase().includes(lowerCaseText)
    );
    return objects;
  };

  if (pickedDomain) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <TitleHeader title={"Open New Fault"}></TitleHeader>

        <View style={{ marginTop: 20 }}>
          <Text style={styles.title}>Fault Domain: {pickedDomain.name}</Text>
        </View>
        <View
          style={{
            height: 100,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Text style={{ height: 30, margin: 10, fontSize: 20 }}>
            Choose Fault Sub-Domain
          </Text>
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              width: 250,
              borderRadius: 10,
              backgroundColor: "white",
              color: "#8E8E8E",
              padding: 10,
            }}
            enterKeyHint="next"
            enablesReturnKeyAutomatically={true}
            onChangeText={(text) => setName2(text)}
            value={name2}
            onSubmitEditing={() => {
              Keyboard.dismiss();
            }}
            placeholder="Search Fault Type..."
          />
        </View>
        <FlatList
          style={{ marginTop: 20 }}
          data={filterSuggestions2(pickedDomain, name2)}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity
                style={styles.container}
                onPress={() => {
                  navigation.navigate("Confirm", {
                    buildingId: buildingId,
                    buildingName: buildingName,
                    spaceTypeId: spaceTypeId,
                    spaceTypeName: spaceTypeName,
                    spaceTypeNameHebrew: spaceTypeNameHebrew,
                    spaceId: spaceId,
                    spaceName: spaceName,
                    domain: pickedDomain,
                    fault: item,
                  });
                }}
              >
                <LinearGradient
                  style={styles.container}
                  colors={
                    item.colors ? [...item.colors] : ["#2768FF", "#2768FF"]
                  }
                >
                  <Text style={styles.text}>{item.name}</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    );
  } else {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TitleHeader title={"Open New Fault"}></TitleHeader>
        <View
          style={{
            height: 100,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Text style={{ height: 30, margin: 10, fontSize: 20 }}>
            Choose Fault Domain:
          </Text>
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              width: 250,
              borderRadius: 10,
              backgroundColor: "white",
              color: "#8E8E8E",
              padding: 10,
            }}
            enterKeyHint="next"
            enablesReturnKeyAutomatically={true}
            onSubmitEditing={() => {
              Keyboard.dismiss();
            }}
            onChangeText={(text) => setName(text)}
            value={name}
            placeholder="Search Fault Type..."
          />
        </View>
        <View
          style={{
            height: 100,
            padding: 20,
            alignItems: "center",
            justifyContent: "center",
            flex: 4,
            flexDirection: "column",
          }}
        >
          <FlatList
            data={filterSuggestions(name)}
            renderItem={({ item }) => (
              <View>
                <TouchableOpacity
                  style={styles.container}
                  onPress={() => {
                    pickDomain(item);
                  }}
                >
                  <Text style={styles.text}>{item.name}</Text>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item) => item}
          />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 70,
    backgroundColor: "#2768FF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    margin: 20,
    elevation: 10,
    shadowColor: "black",
    shadowOpacity: 0.2,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  title: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default FaultChooseScreen;

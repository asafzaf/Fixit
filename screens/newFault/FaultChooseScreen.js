import React, { useState } from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import faultCollection from "../../data/faultDomainsDUMMY.json";
import { LinearGradient } from "expo-linear-gradient";

const FaultChooseScreen = ({ navigation, route }) => {
  const buildingId = route.params.buildingId;
  const buildingName = route.params.buildingName;
  const spaceId = route.params.spaceId;
  const spaceName = route.params.spaceName;

  const [name, setName] = useState("");
  const [pickedDomain, setPickedDomain] = useState("");
  const [name2, setName2] = useState("");

  const domainObjList = faultCollection.data.faultDomains;

  const pickDomain = (name) => {
    const domain = domainObjList.find((domain) => domain.name === name);
    console.log(domain);
    setPickedDomain(domain);
  };

  const filterSuggestions = (text) => {
    const lowerCaseText = text.toLowerCase();
    const objects = domainObjList.filter((domain) =>
      domain.name.toLowerCase().includes(lowerCaseText)
    );
    return objects.map((domain) => domain.name);
  };

  const filterSuggestions2 = (domain, text) => {
    const lowerCaseText = text.toLowerCase();
    console.log(domain.types);
    const objects = domain.types.filter((fault) =>
      fault.name.toLowerCase().includes(lowerCaseText)
    );
    return objects.map((fault) => fault.name);
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log("Name:", name);
  };

  if (pickedDomain) {
    return (
      <View
        style={{
          flex: 1,
          padding: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View>
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
            onChangeText={(text) => setName2(text)}
            value={name2}
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
                    spaceId: spaceId,
                    spaceName: spaceName,
                    data: {
                      domain: pickedDomain,
                      fault: item,
                    },
                  });
                }}
              >
                <LinearGradient
                  style={styles.container}
                  colors={
                    item.colors ? [...item.colors] : ["#2768FF", "#2768FF"]
                  }
                >
                  <Text style={styles.text}>{item}</Text>
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
          padding: 20,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
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
                  <Text style={styles.text}>{item}</Text>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={(item) => item}
          />
        </View>
        {/* <Button title="Submit" onPress={handleSubmit} /> */}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 50,
    backgroundColor: "#2768FF",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    margin: 10,
    elevation: 10,
    shadowColor: "black",
    shadowOpacity: 0.5,
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

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
import faultCollection from "../../data/faultCollection";

const FaultChooseScreen = ({ navigation, route }) => {
  const buildingId = route.params.buildingId;
  const buildingName = route.params.buildingName;
  const spaceId = route.params.spaceId;
  const spaceName = route.params.spaceName;

  const [name, setName] = useState("");
  const [pickedDomain, setPickedDomain] = useState("");
  const [name2, setName2] = useState("");

  const domainObjList = faultCollection.domains;

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
      ><View style={styles.container}>

        <Text style={styles.text}>Domain: {pickedDomain.name}</Text>
      </View>
      <View style={{ height: 70, margin: 10 , borderBottomWidth:1, borderBottomColor: 'black'}}>
        <Text style={{color:'black', fontSize:20}}>Choose a Fault:</Text>
        <TextInput
              style={{
                height: 40,
                borderColor: "gray",
                borderWidth: 1,
                // flex: 1,
                width: 200,
              }}
              onChangeText={(text) => setName2(text)}
              value={name2}
            />
      </View>
        <FlatList
          data={filterSuggestions2(pickedDomain,name2)}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity style={styles.container} onPress={() => {
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
              }}>
                <Text style={styles.text}>{item}</Text>
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
            flex: 1,
            flexDirection: "row",
            borderBottomWidth: 1,
            borderBottomColor: "black",
          }}
        >
          <Text style={{ height: 30, margin: 10 }}>Choose a Domain:</Text>
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              flex: 1,
              width: 200,
            }}
            onChangeText={(text) => setName(text)}
            value={name}
          />
        </View>
        <View
          style={{
            height: 100,
            padding: 20,
            alignItems: "center",
            flex: 4,
            flexDirection: "column",
            borderBottomWidth: 1,
            borderBottomColor: "black",
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
          <Button title="Submit" onPress={handleSubmit} />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    width: 200,
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
  },
});

export default FaultChooseScreen;

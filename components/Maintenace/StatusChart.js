import React, { Component } from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import PieChart from "react-native-pie-chart";

export default class StatusChart extends Component {
  render() {
    const widthAndHeight = 200;
    const series = [123, 321, 123, 789, 537];
    const sliceColor = ["#fbd203", "#ffb300", "#ff9100", "#ff6c00", "#ff3c00"];

    return (
      <ScrollView style={{ flex: 1, backgroundColor: "transparent" }}>
        <View style={[styles.container, { gap: 10 }]}>
          <Text style={[styles.title, { fontSize: 16 }]}>Basic</Text>
          <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
          />
          <Text style={[styles.title, { fontSize: 16 }]}>Doughnut</Text>
          <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            coverRadius={0.45}
            coverFill={"#FFF"}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    margin: 10,
  },
});

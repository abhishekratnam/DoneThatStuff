import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Style from "../styles/Style";
import { SquircleView } from "react-native-figma-squircle";
import MaskedView from "@react-native-masked-view/masked-view";
class Greeting extends Component {
  render() {
    return (
      <View style={{ alignSelf: "center", padding: 12 }}>
        <Text style={Style.titleText}>
          <Text style={{ fontSize: 45 }}>Hello {this.props.name}</Text>
        </Text>
      </View>
    );
  }
}
export default class Dashboards extends Component {
  render() {
    return (
      <View>
        <Greeting name="Abhishek" />
        {/* <SquircleView
          style={{ width: 200, height: 200, alignSelf: "center" }}
          squircleParams={{
            cornerRadius: 30,
            cornerSmoothing: 0.7,
            fillColor: "#FFFFFF",
          }}
        /> */}
      </View>
    );
  }
}

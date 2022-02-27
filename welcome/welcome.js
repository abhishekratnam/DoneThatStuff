import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Style from "../styles/Style";
import { SquircleView } from "react-native-figma-squircle";
import MaskedView from "@react-native-masked-view/masked-view";
class Greeting extends Component {
  render() {
    return (
      <View style={Style.container}>
        <Text style={Style.welcome}>
          <Text>Hello {this.props.name}</Text>
        </Text>
      </View>
    );
  }
}
export default class Welcome extends Component {
  render() {
    return <Greeting name="Abhishek" />;
  }
}

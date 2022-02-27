import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Style from "../styles/Style";
import { SquircleView } from "react-native-figma-squircle";
import MaskedView from "@react-native-masked-view/masked-view";

import { Button } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "react-native-vector-icons/FontAwesome";

import { TextInput } from "react-native-paper";
import Welcome from "../welcome/welcome";
class Signin extends React.Component {
  state = { Name: "", Age: "", Email: "", Income: "" };

  onChangeText = (key, val) => {
    this.setState({ [key]: val });
    console.log(this.state);
  };
  submit() {
    console.warn(this.state);
  }
  render() {
    return (
      <View style={Style.container}>
        <TextInput
          style={Style.inputText}
          placeholder="Name:"
          onChangeText={(val) => this.onChangeText("Name", val)}
        ></TextInput>
        <TextInput
          style={Style.inputText}
          placeholder="Age:"
          onChangeText={(val) => this.onChangeText("Age", val)}
        ></TextInput>
        <TextInput
          style={Style.inputText}
          placeholder="Email:"
          onChangeText={(val) => this.onChangeText("Email", val)}
        ></TextInput>
        <TextInput
          style={Style.inputText}
          placeholder="Income:"
          onChangeText={(val) => this.onChangeText("Income", val)}
        ></TextInput>
        <Button
          style={Style.buttons}
          ViewComponent={LinearGradient} // Don't forget this!
          linearGradientProps={{
            colors: ["#ffffff", "red"],
            start: { x: 0, y: 0 },
            end: { x: 1, y: 0.5 },
          }}
          onPress={() => {
            this.submit();
            this.props.navigation.navigate("Welcome");
          }}
          title="Go"
        />
      </View>
    );
  }
}
export default Signin;

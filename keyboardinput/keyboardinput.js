import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Style from "../styles/Style";
import { SquircleView } from "react-native-figma-squircle";
import MaskedView from "@react-native-masked-view/masked-view";
import { StatusBar } from "expo-status-bar";

import { TextInput } from "react-native-paper";

import { Button } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";

export default class Keyboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      income: 0,
      thing: "",
    };
  }
  submit() {
    console.warn(this.state);
  }
  render() {
    return (
      <View style={{ alignSelf: "center", padding: 12 }}>
        <StatusBar style="auto" />
        {/* Not saving for ints */}
        <TextInput
          style={Style.inputText}
          onChangeNumber={(val) => this.setState({ income: val })}
          onSubmitEditing={() => {
            alert(`Your Message is:${this.state.income}`);
          }}
          value={this.state.income}
          placeholder="Rs:"
          keyboardType="decimal-pad"
        />

        <TextInput
          style={Style.inputText}
          onChangeText={(val) => this.setState({ thing: val })}
          onSubmitEditing={() => {
            alert(`Your Message is:${this.state.thing}`);
            this.setState({ thing: "" });
          }}
          value={this.state.thing}
          placeholder="What was this expense for?"
        />
        <Button
          ViewComponent={LinearGradient}
          linearGradientProps={{
            colors: ["#ffffff", "red"],
            start: { x: 0, y: 0 },
            end: { x: 1, y: 0.5 },
          }}
          onPress={() => {
            this.submit();
          }}
          title="Save Now"
        />
      </View>
    );
  }
}

import React from "react";
import Signin from "./signin/signin";
import { StyleSheet, Text, View } from "react-native";
import Cards from "./cards/cards";
import Welcome from "./welcome/welcome";
import Dashboards from "./dashboard/dashboard";
import Keyboard from "./keyboardinput/keyboardinput";

import { createStackNavigator } from "@react-navigation/stack";

import { NavigationContainer } from "@react-navigation/native";
const Stack = createStackNavigator();
export default function App() {
  console.log("App executed");
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signin">
        <Stack.Screen name="Signin" component={Signin} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Dashboards" component={Dashboards} />
        <Stack.Screen name="Keyboard" component={Keyboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

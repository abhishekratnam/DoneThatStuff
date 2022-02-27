import { StyleSheet, View, Text, Image, Dimensions } from "react-native";

const screen = Dimensions.get("screen");
module.exports = {
  container: {
    flex: 1,
    backgroundColor: "#c40000",
  },
  buttons: {
    padding: 10,
    fontWeight: "bold",
  },
  inputText: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  titleText: {
    color: "#FFFFFF",
    fontSize: 20,
    top: 50,
    fontWeight: "bold",
  },
  welcome: {
    flex: 1,
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 45,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#FFFFFF",
    width: screen.width * 0.8,
    height: screen.height * 0.2,
  },
  header: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  centerColumnAligment: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
};

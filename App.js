import React from "react";
import { StyleSheet, View } from "react-native";
import Bower from "./logos/bower.svg";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Bower width={256} height={256} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

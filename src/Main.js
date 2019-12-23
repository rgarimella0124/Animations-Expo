import React from "react";
import { Animated, Easing, StyleSheet, View, Button } from "react-native";

export default class Main extends React.Component {
  render() {
    const divider = <View style={{ height: 10 }} />;
    return (
      <View
        style={{
          justifyContent: "center",
          flex: 1
        }}
      >
        <Button
          title="Easing"
          onPress={() => {
            this.props.navigation.navigate("Easing");
          }}
        />
        {divider}
        <Button
          title="InfiniteSpin"
          onPress={() => {
            this.props.navigation.navigate("InfiniteSpin");
          }}
        />
        {divider}
        <Button
          title="Stagger"
          onPress={() => {
            this.props.navigation.navigate("Stagger");
          }}
        />
        {divider}
        <Button
          title="Sequence"
          onPress={() => {
            this.props.navigation.navigate("Sequence");
          }}
        />
        {divider}
        <Button
          title="Parallel"
          onPress={() => {
            this.props.navigation.navigate("Parallel");
          }}
        />
        {divider}
        <Button
          title="Spring"
          onPress={() => {
            this.props.navigation.navigate("Spring");
          }}
        />
      </View>
    );
  }
}

import { View, Text, Image } from "react-native";
import React from "react";
import { Header } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import RightComponent from "./RightComponent";

export default function AppHeader() {
  return (
    <Header
      ViewComponent={LinearGradient} // Don't forget this!
      linearGradientProps={{
        colors: ["white", "white"],
        start: { x: 0, y: 0.5 },
        end: { x: 1, y: 0.5 },
      }}
      leftComponent={
        <Image
          styles={{ height: 70, width: 70 }}
          source={require("../../../assets/images/logo.png")}
        />
      }
      centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
      rightComponent={<RightComponent />}
    />
  );
}

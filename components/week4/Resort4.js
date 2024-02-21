import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Image, TouchableOpacity, View } from "react-native";
import { Text, Divider } from "react-native-paper";
import Card from "react-native-paper";

export default function Resort4() {
  return (
    <View>
      <Text
        variant="headlineSmall"
        style={{ fontWeight: "bold", marginTop: 10, color: "#2A2A2A" }}
      >
        Hotel Description
      </Text>
      <Text style={{ marginBottom: 10, color: "#898989" }}>
        218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor
        incididunt ut labore et dolore
      </Text>
      <Divider />
    </View>
  );
}

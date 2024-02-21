import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Section1() {
  return (
    <View style={{flexDirection: "row" }}>
      <Image
        style={{ flex: 1, resizeMode: "cover", aspectRatio: 6/2 }}
        source={require("../../assets/week3/room-1.jpg")}
      />
    </View>
  );
}

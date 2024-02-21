import React from "react";
import { Image, ScrollView, View } from "react-native";
import { Avatar, Button, Card, Divider, Icon, Text } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";

export default function Resort1() {
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        style={{ flex: 1, resizeMode: "cover", aspectRatio: 6 / 2 }}
        source={require("../../assets/week3/room-1.jpg")}
      />
    </View>
  );
}

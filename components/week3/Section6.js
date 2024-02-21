import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import MyIcon from "./MyIcon";

export default function Section6() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        marginVertical: 10,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderColor:"#D9D9D9",
        padding:10,
      }}
    >
      <Text style={{ fontWeight: "bold" }}>Location</Text>
      <Text>
        218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor
        incididunt ut labore et…
      </Text>
      <View style={{ overflow: "hidden" }}>
        <Image
          style={{ resizeMode: "cover" }}
          source={require("C:/Users/User/university/mobile/AwesomeProject/assets/week3/map.jpg")}
        />
      </View>
    </View>
  );
}

import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Icon, Divider } from "react-native-paper";

export default function Resort3() {
  return (
    <View style={{ justifyContent: "center" }}>
      <View style={{ flex: 1, flexDirection: "row", marginVertical: 10 }}>
        <View
          style={{
            justifyContent: "center",
            alignContent: "center",
            backgroundColor: "#E5634D",
            borderRadius: 50,
            width: 50,
            height: 50,
            margin: 10,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 20,
              textAlign: "center",
            }}
          >
            9.5
          </Text>
        </View>
        <View style={{ margin: 10 }}>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text style={{ color: "#E5634D", fontSize: 20 }}>Excellent</Text>
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Text>See 801 reviews</Text>
          </View>
        </View>
      </View>
      <Divider />
    </View>
  );
}

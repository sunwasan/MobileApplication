import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View, Button } from "react-native";
import MyIcon from "./MyIcon";
// import { Button } from "react-native-paper";

export default function Section8() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "#D9D9D9",
        paddingBottom: 10,
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "column" }}>
        <Text>Price</Text>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#E5634D" }}>
          $399.99
        </Text>
        <Text>AVG/Night</Text>
      </View>
      <View style={{alignContent:"center", justifyContent:"center"}}>
        <Button
          title="Book Now"
          color="#E5634D"
          onPress={() => Alert.alert("Button with adjusted color pressed")}
        />
      </View>
    </View>
  );
}

import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Image, TouchableOpacity, View } from "react-native";
import { Divider,Text, Icon } from "react-native-paper";

const icon_size = 30;
const icon_color = "#4A90A4";
const font_color = "grey";
const font_size = 10;
export default function Resort5() {
  return (
    <View style={{ flexDirection: "column" }}>
      <View
        style={{
          flexDirection: "row",
          marginVertical: 10,
          justifyContent: "space-around",
        }}
      >
        <Icon source="wifi" size={icon_size} color={icon_color} />
        <Icon source="coffee" size={icon_size} color={icon_color} />
        <Icon source="toilet" size={icon_size} color={icon_color} />
        <Icon source="car" size={icon_size} color={icon_color} />
        <Icon source="paw" size={icon_size} color={icon_color} />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <Text>wifi</Text>
        <Text>coffee</Text>
        <Text>toilet</Text>
        <Text>car</Text>
        <Text>paw</Text>
      </View>

      <Divider style={{marginTop:10}}/>
    </View>
  );
}

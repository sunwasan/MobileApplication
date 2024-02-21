import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import MyIcon from "./MyIcon";

const icon_size = 20;
const icon_color = "#4A90A4";
const font_color = "grey";
const font_size = 10;
export default function Section5() {
  return (
    <View
      style={{ flexDirection: "row",  marginVertical: 10 }}
    >
      <MyIcon
        title="wifi"
        name="wifi"
        size={icon_size}
        color={icon_color}
        fontsize={font_size}
        fontcolor={font_color}
      />
      <MyIcon
        title="coffee"
        name="coffee"
        size={icon_size}
        color={icon_color}
        fontsize={font_size}
        fontcolor={font_color}
      />
      <MyIcon
        title="bath"
        name="bath"
        size={icon_size}
        color={icon_color}
        fontsize={font_size}
        fontcolor={font_color}
      />
      <MyIcon
        title="car"
        name="car"
        size={icon_size}
        color={icon_color}
        fontsize={font_size}
        fontcolor={font_color}
      />
      <MyIcon
        title="paw"
        name="paw"
        size={icon_size}
        color={icon_color}
        fontsize={font_size}
        fontcolor={font_color}
      />
    </View>
  );
}

import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Section4() {
  return (
    <View style={{borderBottomWidth:1, borderTopWidth:1, borderColor:"#D9D9D9"}}>
        <View><Text style={{fontSize:20, fontWeight:"bold", marginTop:10, color:"#2A2A2A"}}>Hotel Description</Text></View>
        <View><Text style={{marginBottom:10, color:"#898989"}}>218 Austen Moutntain, consectetur adipiscing, sed eiusmod tempor incididunt ut labore et dolore</Text></View>
    </View>
  );
}

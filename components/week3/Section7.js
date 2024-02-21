import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import MyIcon from "./MyIcon";

export default function Section7() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        marginVertical: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#D9D9D9",
        padding: 10,
      }}
    >
      <View>
        <View>
          <Text style={{ fontWeight: "bold" , fontSize:20, paddingBottom:10}}>Room Type</Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flexDirection: "column", overflow: "hidden" }}>
            <Image
              style={{ width: 120, height: 120, borderRadius: 50 / 4 }}
              source={require("C:/Users/User/university/mobile/AwesomeProject/assets/week3/room-8.jpg")}
            />
          </View>
          <View style={{ flexDirection: "column", padding:10 }}>
            <Text style={{fontWeight:"bold", fontSize:20, marginBottom:20}}>Standard Twin Room</Text>
            <Text style={{fontSize:20,fontWeight:'bold',color:"#E5634D"}}>$399.99</Text>
            <Text style={{color:'#5495A9'}}>Hurry Up! This is your last room!</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

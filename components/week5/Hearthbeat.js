import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Icon } from "react-native-paper";

export default function Heartbeat() {
    const [cnt , setCount] = useState("0")
    const onPressHeart = () => {
        let new_cnt = Number(cnt) + 1;
        setCount(new_cnt);
    }
  return (
    <View style ={{flex:1, marginTop:200}}>
      <View style={{ flexDirection: "row", padding:10, justifyContent:"space-around" }}>
        <TouchableOpacity onPress={onPressHeart}>
          <Icon source="heart" color="orange" size={60} />
        </TouchableOpacity>
        <Text style={{fontSize:45}}>{cnt}</Text>
      </View>
    </View>
  );
}

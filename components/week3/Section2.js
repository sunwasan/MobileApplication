import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Section2() {
  return (
    <View style={{ flex: 1, marginTop: -50 }}>
      <View
        style={{
          marginHorizontal:40,
          padding: 10,
          flex: 1,
          backgroundColor: "#F5F5F5",
          borderRadius: 20,
          height:150,
          alignItems:'center'
        }}
      >
        <Text style={{fontWeight: 'bold'}}>Hilton San Francisco</Text>
      </View>
    </View>
  );
}

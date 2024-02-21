import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Avatar, Button, Card } from "react-native-paper";

export default function Section2() {
  return (

    <View style={{ flex: 1, marginTop: -50 }}>
      <View
        style={{
          marginVertical: 10,
          padding: 10,
          flex: 1,
          backgroundColor: "#F5F5F5",
          borderRadius: 20,
          height: 120,
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Hilton San Francisco
        </Text>
        <View style={{ flexDirection: "row", padding: 5 }}>
          <FontAwesome name="star" size={20} color="orange" />
          <FontAwesome name="star" size={20} color="orange" />
          <FontAwesome name="star" size={20} color="orange" />
          <FontAwesome name="star" size={20} color="orange" />
          <FontAwesome name="star-half-o" size={20} color="orange" />
        </View>
        <Text style={{ textAlign: "center", padding: 5 }}>
          Facilities provided may range from a modest quality mattress in a
          small room to large suites
        </Text>
      </View>
    </View>
  );
}

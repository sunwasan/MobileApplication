import React from "react";
import { ScrollView, Text, View } from "react-native";
import Signup from "../../components/week3/Signup";
import Card from "../../components/week3/Card";
import Hotel from "../../components/week3/Hotel";
import Menu from "../../components/week3/Menu";

export default function Travel() {
  return (
    <ScrollView>
      <View>
        <Menu />
        <Card />
        <Hotel />
        <Signup />
      </View>
    </ScrollView>
  );
}

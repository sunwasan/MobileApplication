import React from "react";
import { Image, ScrollView, View } from "react-native";
import { Avatar, Button, Card, Divider, Icon, Text } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import Resort1 from "../../components/week4/Resort1";
import Resort2 from "../../components/week4/Resort2";
import Resort4 from "../../components/week4/Resort4";
import Resort3 from "../../components/week4/Resort3";
import Resort5 from "../../components/week4/Resort5";
import Resort6 from "../../components/week4/Resort6";
import Section7 from "../../components/week3/Section7";
import Section8 from "../../components/week3/Section8";
export default function ResortPaper() {
  return (
    <ScrollView style={{ paddingVertical: 25, flex: 1, marginBottom: 25 }}>
      <Resort1 />
      <View style={{ marginHorizontal: 10 }}>
        <Resort2 />
        <Resort3 />
        <Resort4 />
        <Resort5 />
        <Resort6 />
        <Section7 />
        <Section8 />
      </View>
    </ScrollView>
  );
}

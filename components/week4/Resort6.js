import React from "react";
import { Image, ScrollView, View } from "react-native";
import { Avatar, Button, Card, Divider, Icon, Text } from "react-native-paper";

export default function Resort6() {
  return (
    <View>
      <Card
        style={{ marginVertical: 10, backgroundColor: "white", elevation: 0 }}
      >
        <Card.Title title="Location" titleVariant="headlineSmall" />
        <Card.Content>
          <Text>
            218 Austen Mountain, consectetur adipiscing, sed do eiusmod tempor
            incididunt ut labore et…
          </Text>
        </Card.Content>
        <Card.Cover
          source={require("C:/Users/User/university/mobile/AwesomeProject/assets/week3/map.jpg")}
        style={{borderRadius:0}}
        />
      </Card>
    </View>
  );
}

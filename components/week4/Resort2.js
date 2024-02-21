import React from "react";
import { Image, ScrollView, View } from "react-native";
import { Avatar, Button, Card, Divider, Icon, Text } from "react-native-paper";

export default function Resort2() {
  return (
    <View>
      <Card
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F5F5F5",
          flex: 1,
          marginTop: -50,
          padding: 10,
        }}
      >
        <Card.Content>
          <Text
            variant="titleLarge"
            style={{ textAlign: "center", fontWeight: "bold" }}
          >
            Hilton San Francisco
          </Text>
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <Icon source="star" size={20} color="orange" />
            <Icon source="star" size={20} color="orange" />
            <Icon source="star" size={20} color="orange" />
            <Icon source="star" size={20} color="orange" />
            <Icon source="star-half-full" size={20} color="orange" />
          </View>

          <Text variant="titleMedium" style={{ textAlign: "center" }}>
            Facilities provided may range from a modest quality mattress in a
            small room to large suites
          </Text>
        </Card.Content>
      </Card>
    </View>
  );
}

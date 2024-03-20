import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Exercise2() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <View style={{ width: 100, backgroundColor: "#50E3C2" }} />
      </View>
      <Button title="Next" onPress={() => navigation.navigate("Ex03")} />
    </View>
  );
}

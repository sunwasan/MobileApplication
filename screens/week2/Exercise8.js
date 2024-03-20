import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Exercise8() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ width: 100, height: 100, backgroundColor: "#50E3C2" }} />
        <View style={{ width: 100, height: 100, backgroundColor: "#4A90E2" }} />
        <View style={{ width: 100, height: 100, backgroundColor: "#9013FE" }} />
      </View>
      <Button title="Next" onPress={() => navigation.navigate("Ex09")} />
    </View>
  );
}

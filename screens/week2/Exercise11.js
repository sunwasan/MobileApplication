import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Exercise11() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: "#4A90E2" }} />
        <View style={{ flex: 1, backgroundColor: "#50E3C2" }} />
      </View>
      <Button title="Next" onPress={() => navigation.navigate("Ex12")} />
    </View>
  );
}

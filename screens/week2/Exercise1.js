import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Exercise1() {

  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "stretch",
        }}
      >
        <View style={{ height: 100, backgroundColor: "#50E3C2" }} />
      </View>
      <Button title="Next" onPress={() => navigation.navigate("Ex02")} />
    </View>
  );
}

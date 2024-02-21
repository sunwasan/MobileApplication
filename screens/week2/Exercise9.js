import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Exercise9() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "columns",
        justifyContent: "space-around",
      }}
    >
      <View
        style={{
          alignItems: "flex-start",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ width: 100, height: 100, backgroundColor: "#50E3C2" }} />
        <View style={{ width: 100, height: 100, backgroundColor: "#50E3C2" }} />
        <View style={{ width: 100, height: 100, backgroundColor: "#50E3C2" }} />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ width: 100, height: 100, backgroundColor: "#4A90E2" }} />
        <View style={{ width: 100, height: 100, backgroundColor: "#4A90E2" }} />
        <View style={{ width: 100, height: 100, backgroundColor: "#4A90E2" }} />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
        }}
      >
        <View style={{ width: 100, height: 100, backgroundColor: "#9013FE" }} />
        <View style={{ width: 100, height: 100, backgroundColor: "#9013FE" }} />
        <View style={{ width: 100, height: 100, backgroundColor: "#9013FE" }} />
      </View>
    </View>
  );
}

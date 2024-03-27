import React from "react";
import { View, Image } from "react-native";

export default function Bird() {
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={{
          uri: "data:image/png;base64,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"
        }}
        style={{ width: "100%", height: 500 }}
      />
    </View>
  );
}
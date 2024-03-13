import React, { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Bmi() {
  const [weight, setWeight] = useState("70");
  const [height, setHeight] = useState("170");
  const [bmi, setBmi] = useState("0");
  const [status, setStatus] = useState("NORMAL");

  console.log("STATE : ", weight, height, bmi);

  const onPressButton = () => {
    console.log("Caculate BMI!");
    let output = weight / (((height / 100) * height) / 100);
    setBmi(output.toFixed(2));

    let text_status;
    if (output < 18.5) {
      text_status = "UNDERWEIGHT";
    } else if (output < 24.9) {
      text_status = "NORMAL";
    } else if (output < 29.9) {
      text_status = "OVERWEIGHT";
    } else if (output < 34.9) {
      text_status = "OBESE";
    } else {
      text_status = "EXTREMELY OBESE";
    }
    setStatus(text_status);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "top",
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          padding: 20,
          borderRadius: 10,
          height: 100,
          justifyContent: "space-around",
          marginTop: 20,
        }}
      >
        <Text>Weight (kg.)</Text>
        <TextInput
          placeholder="Input your weight"
          keyboardType="numeric"
          value={weight}
          onChangeText={(newWeight) => setWeight(newWeight)}
        />
      </View>
      <View
        style={{
          backgroundColor: "white",
          padding: 20,
          borderRadius: 10,
          height: 100,
          justifyContent: "space-around",
          marginTop: 20,
        }}
      >
        <Text>Height (cm.)</Text>
        <TextInput
          placeholder="Input your height"
          keyboardType="numeric"
          value={height}
          onChangeText={(newHeight) => setHeight(newHeight)}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          marginVertical: 20,
        }}
      >
        <View
          style={{
            flex: 1,
            padding: 10,
            backgroundColor: "white",
            borderRadius: 10,
            height: 100,
            justifyContent: "center",
            alignItems: "center",
            marginRight: 10,
          }}
        >
          <Text style={{ fontSize: 24.2 }}>{bmi}</Text>
        </View>
        <View
          style={{
            flex: 1,
            padding: 10,
            backgroundColor: "white",
            borderRadius: 10,
            height: 100,
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 10,
          }}
        >
          <Text style={{ fontSize: 24.2 }}>{status}</Text>
        </View>
      </View>
      <TouchableOpacity  onPress={onPressButton}>
        <View
          style={{ padding: 20, backgroundColor: "#242568", borderRadius: 10 }}
        >
          <Text
            style={{
              fontSize: 30,
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Calculate
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

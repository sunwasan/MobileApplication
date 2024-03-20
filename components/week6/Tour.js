import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import TourItem from "./TourItem";

export default function Tour(props) {
  const [OnlineTours, setOnlineTours] = useState([]);

  const loadOnlineTours = async () => {
    try {
      let promise = await fetch(
        "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/trips.json"
      );
      let data = await promise.json();
      setOnlineTours(data);
    //   console.log("DATA :", data);
    } catch (error) {
      console.log("ERROR :", error);
    }
  };

  useEffect(() => {
    loadOnlineTours();
  }, []);

  return (
    <View style={props.style}>
      <Text style={{ fontSize: 20 }}>Tour</Text>
      <Text style={{ color: "grey" }}>
        Let find out what most interesting things
      </Text>
      <ScrollView
        horizontal={true}
        style={{ flexDirection: "row", marginTop: 20 }}
      >
        {OnlineTours.map((element, index) => (
          <TourItem key={index} item={element} />
        ))}
      </ScrollView>
    </View>
  );
}

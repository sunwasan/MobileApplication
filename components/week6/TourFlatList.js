import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import TourItem from "./TourItem";

export default function TourFlatList(props) {
  const tours = [
    {
      id: "1",
      title: "Tour in London",
      uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-1.jpg",
    },
    {
      id: "2",
      title: "Tour in Paris",
      uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-2.jpg",
    },
    {
      id: "3",
      title: "Tour in Italy",
      uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-3.jpg",
    },
    {
      id: "4",
      title: "Tour in Portugal",
      uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-4.jpg",
    },
    {
      id: "5",
      title: "Tour in Netherlands",
      uri: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/all/trip-5.jpg",
    },
  ];
  const [OnlineTours, setOnlineTours] = useState([]);

  const loadOnlineTours = async () => {
    try {
      let promise = await fetch(
        "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/trips.json"
      );
      let data = await promise.json();
      setOnlineTours(data);
      // console.log("DATA :", data);
    } catch (error) {
      console.log("ERROR :", error);
    }
  };

  useEffect(() => {
    loadOnlineTours();
  }, [])

  return (
    <View style={props.style}>
      <Text style={{ fontSize: 20 }}>Tour Flat List</Text>
      <Text style={{ color: "grey" }}>
        Let find out what most interesting things
      </Text>
      <FlatList
        horizontal={true}
        data={OnlineTours}
        renderItem={({ item, index }) => {
          return (
            <View>
              <TourItem item={item} />
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { FlatList, View } from "react-native";
import { Image } from "react-native-svg";
import EventCard from "./EventCard";

export default function Event(props) {
  const [OnlineEvent, setOnlineEvent] = useState([]);
  const getData = async () => {
    let promise = await fetch(
      "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/json/events.json "
    );
    let data = await promise.json();
    setOnlineEvent(data);
    console.log("Data is ", data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <View style ={props.style}> 
        <Text style ={{color:'black', fontSize:20}}>Up Coming Events</Text>
        <Text style ={{color:'grey'}}>What's the Worst That Could Happend</Text>
      <FlatList
        horizontal={true}
        data={OnlineEvent}
        renderItem={({ item, index }) => {
          return (
            <View>
              <EventCard item={item}/>
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

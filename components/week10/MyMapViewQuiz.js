import React, { useEffect, useState } from "react";
import { Dimensions, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { FontAwesome } from "@expo/vector-icons";
export default function MyMapViewQuiz(props) {
  const width = Dimensions.get("screen").width;
  const height = Dimensions.get("screen").height;
  const [person, setPerson] = useState([]);

  const personLocation = async () => {
    let url_endpoint = "https://ckartisan.com/api/location";
    try {
      let response = await fetch(url_endpoint);
      let items = await response.json();
      setPerson(items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    personLocation();
  }, []);
  if (props.location) {
    return (
      <View>
        <MapView
          style={{ width: width, height: height }}
          initialRegion={{
            latitude: props.location.coords.latitude,
            longitude: props.location.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          showsUserLocation={true}
          onUserLocationChange={(event) => {
            // console.log("LOCATION CHANGED : " , event);
            if (event.nativeEvent.coordinate) {
              let new_location = {
                coords: event.nativeEvent.coordinate,
                mocked: false,
                timestamp: event.nativeEvent.coordinate.timestamp,
              };
              //SET LOCATION
              props.setLocation(new_location);
            }
          }}
        >
          {person.map((item) => (
            <Marker
              coordinate={{
                latitude: Number(item.latitude),
                longitude: Number(item.longitude),
              }}
              title={item.user_id}
              key={item.id.toString()}
              description={item.user_id}
            >
              <FontAwesome name="user" size={20} color="orange" />
            </Marker>
          ))}
        </MapView>
      </View>
    );
  } else {
    return <MapView style={{ width: width, height: height }}></MapView>;
  }
}

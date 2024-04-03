import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import GPS from "../../helpers/GPS";
import MyMapViewQuiz from "../../components/week10/MyMapViewQuiz";

export default function LocationQuiz() {
  //LOCATION
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  //ACTION WHEN ENTER SCREENS
  const onLoad = async () => {
    let loc = await GPS.getLocation();
    if (loc) {
      console.log("Location : ", loc);
      setLocation(loc);
    } else {
      setErrorMsg("Location not found");
    }
  };
  useEffect(() => {
    onLoad();
  }, []);

  //SCREEN UI
  return (
    <View style={{ flex: 1 }}>
      <Text>{location ? new Date(location.timestamp).toString() : "-"}</Text>
      <View
        style={{
          flexDirection: "row",
          height: 70,
          backgroundColor: "#50E3C2",
        }}
      >
        <View style={{ flex: 1, flexDirection: "column" }}>
          <Text style={{ textAlign: "center" }}>Lat/Lon</Text>
          <Text style={{ textAlign: "center" }}>
            {location ? location.coords.latitude : "-"}
          </Text>
          <Text style={{ textAlign: "center" }}>
            {location ? location.coords.longitude : "-"}
          </Text>
        </View>
        <View style={{ flex: 1, flexDirection: "column" }}>
          <Text style={{ textAlign: "center" }}>Speed / Accuracy</Text>
          <Text style={{ textAlign: "center" }}>
            {location ? Number(location.coords.speed * 3.6).toFixed(0) : "-"}{" "}
            km/h
          </Text>
          <Text style={{ textAlign: "center" }}>
            {location ? Number(location.coords.accuracy).toFixed(0) : "-"} m.
          </Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <MyMapViewQuiz location={location} setLocation={setLocation} />
      </View>
    </View>
  );
}

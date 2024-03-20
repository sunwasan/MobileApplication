import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Exercise1 from "../screens/week2/Exercise1";
import Exercise2 from "../screens/week2/Exercise2";
import Exercise3 from "../screens/week2/Exercise3";
import Exercise4 from "../screens/week2/Exercise4";
import Exercise5 from "../screens/week2/Exercise5";
import Exercise6 from "../screens/week2/Exercise6";
import Exercise7 from "../screens/week2/Exercise7";
import Exercise8 from "../screens/week2/Exercise8";
import Exercise9 from "../screens/week2/Exercise9";
import Exercise10 from "../screens/week2/Exercise10";
import Exercise11 from "../screens/week2/Exercise11";
import Exercise12 from "../screens/week2/Exercise12";
import Extra from "../screens/week2/Extra";
import Home from "../screens/week6/Home";
import Resort from "../screens/week3/Resort";

const Stack = createStackNavigator();

export default function HomeStack() {
  const AllScreen = [
    Exercise1,
    Exercise2,
    Exercise3,
    Exercise4,
    Exercise5,
    Exercise6,
    Exercise7,
    Exercise8,
    Exercise9,
    Exercise10,
    Exercise11,
    Exercise12,
  ];
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{ title: "Home" }} />

      {AllScreen.map((Element, ind) => {
        const screenIndex = ind + 1 < 10 ? `0${ind + 1}` : ind + 1;
        return (
          <Stack.Screen
            key={`Ex${screenIndex}`}
            name={`Ex${screenIndex}`}
            component={Element}
            options={{ title: `Exercise ${screenIndex}` }}
          />
        );
      })}
      <Stack.Screen
        key={"Extra"}
        name={"Extra"}
        component={Extra}
        options={{ title: "Extra" }}
      />
      <Stack.Screen
        key={"Resort_Home"}
        name={"Resort_Home"}
        component={Resort}
        options={{ title: "Resort (HomeStack)" }}
      />
    </Stack.Navigator>
  );
}

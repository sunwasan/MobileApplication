import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from "./BottomTab";
import PokemonTab from "./PokemonTab";
import Resort from "../screens/week3/Resort";
import Health from "../screens/week5/Health";
import Travel from "../screens/week3/Travel";
import YourHealth from "../screens/week9/YourHealth";
import TodoList from "../screens/week9/TodoList";

const Stack = createStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName="BottomTab">
      <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
      <Stack.Screen name="PokemonTab" component={PokemonTab} options={{ title : "Pokemon World" }}  />
      <Stack.Screen name="ResortTab" component={Resort} options={{ title : "Resort (Root Stack)"}} />
      <Stack.Screen name="HealthTab" component={Health} options={{ title : "Health"}} />
      <Stack.Screen name="TravelTab" component={Travel} options={{title:"Travel"}}/>
      <Stack.Screen name="YourHealth" component={YourHealth} options={{title:"YourHealth"}} />
      <Stack.Screen name="TodoList" component={TodoList} options={{title:"TodoList"}} />
    </Stack.Navigator>
  );
}

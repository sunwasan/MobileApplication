import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Alert,
  Image,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Welcome from "./screens/Welcome";
import Exercise1 from "./screens/week1/Exercise1";
import Exercise2 from "./screens/week1/Exercise2";
import Exercise3 from "./screens/week1/Exercise3";
import Exercise4 from "./screens/week1/Exercise4";
import Exercise5 from "./screens/week1/Exercise5";
import Exercise6 from "./screens/week1/Exercise6";
import Exercise7 from "./screens/week1/Exercise7";
import Exercise8 from "./screens/week1/Exercise8";
import Exercise9 from "./screens/week1/Exercise9";
import Exercise10 from "./screens/week1/Exercise10";
import Exercise11 from "./screens/week1/Exercise11";
import Exercise12 from "./screens/week1/Exercise12";
import Extra from "./screens/week1/Extra";
import Greeting from "./components/greeting";
import Travel from "./screens/week2/Travel";
import Resort from "./screens/week2/Resort";

export default function App() {
  return (
    // <Travel/>
    <Resort/>
  );
}

// export default function App() {
//   return (
//     // <Exercise1/>
//     // <Exercise2/>
//     // <Exercise3/>
//     // <Exercise4/>
//     // <Exercise5/>
//     // <Exercise6/>
//     // <Exercise7/>
//     // <Exercise8/>
//     // <Exercise9/>
//     // <Exercise10/>
//     // <Exercise11/>
//     // <Exercise12/>
//     // <Extra />
//   );
// }

// export default function App() {
//   return (
//     <ScrollView
//       style={{
//         flex: 1,
//         marginTop: 25,
//       }}
//     >
//       <TextInput
//         keyboardType="email-address"
//         autoCapitalize="none"
//         maxLength={30}
//         multiline={false}
//         autoCorrect={false}
//         placeholder="Please Enter you email"
//         returnKeyType="next"
//         onChangeText={(text) => {}}
//         defaultValue="Default text"
//       />

//       <Button
//         title="Press me"
//         onPress={() => Alert.alert("Simple Button pressed🚀🚀")}
//         color="#665544"
//       />
//       <Image
//         source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
//         style={{ width: 150, height: 150, borderRadius: 150 / 2 }}
//       />
//       <FontAwesome name="heart-o" size={50} color="#FFBFD3" />
//       <Greeting name="Rexxar"  />
//       <Greeting name="Jaina" />
//       <Greeting name="Valeera" />
//     </ScrollView>
//   );
// }

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Exercise12() {
  return (
    <View style = {{flex:1, flexDirection:'row' }}>
      <View style={{flex:1, backgroundColor: '#4A90E2'}} />
      <View style={{flex:1, backgroundColor: '#50E3C2'}} />
      <View style={{flex:1, backgroundColor: '#9013FE'}} />
    </View>
    
  );
}



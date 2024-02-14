import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Exercise7() {
  return (
    <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent:'flex-start',
        alignItems : 'flex-end'
        }}>
      <View style={{width: 100, height:100, backgroundColor: '#50E3C2'}} />
      <View style={{width: 100, height:100, backgroundColor: '#4A90E2'}} />
      <View style={{width: 100, height:100, backgroundColor: '#9013FE'}} />
    </View>

  );
}



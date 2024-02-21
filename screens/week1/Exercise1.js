import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Exercise1() {
  return (
    <View style={{
      flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        }}>
      <View style={{height: 100, backgroundColor: '#50E3C2'}} />
    </View>

  );
}



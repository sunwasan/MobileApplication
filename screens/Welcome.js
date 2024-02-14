import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Welcome() {
  return (
    <View style={{
    flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        }}>
      <View style={{
        width: 50, height: 50, 
        backgroundColor: '#FACEC5'}} />
      <View style={{
          height: 50, 
          backgroundColor: 'pink'}} />
      <View style={{
          height: 50, 
          backgroundColor: 'purple'}} />
    </View>

  );
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

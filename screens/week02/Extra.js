import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function Extra() {
  return (
    <View style = {{flex:1, flexDirection:'columns', rowGap:10}}>
       <View style={{flex:1, flexDirection: 'row', backgroundColor: '#FFEBB6'}} />
       <View style= {{flex:2, flexDirection:'row', columnGap:5}}>
          <View style= {{flex:1, flexDirection:'column', backgroundColor: '#8BD7B1'}}/>
          <View style= {{flex:2, flexDirection:'column', rowGap:10}}>
            <View style = {{flex:1, flexDirection: 'row', backgroundColor: '#FE706E'}} />
            <View style = {{flex:1, flexDirection: 'row', columnGap:5}}>
              <View style = {{flex:1, flexDirection: 'column', backgroundColor: "#FFCB65"}}/>
              <View style = {{flex:1, flexDirection: 'column', backgroundColor: "#FE706E"}}/>
            </View>
          </View>
       </View>
    </View>
  );
}



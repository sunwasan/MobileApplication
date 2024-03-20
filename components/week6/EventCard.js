import React from "react";
import { Image, Text, View } from "react-native";

export default function EventCard(props) {
    let width_card = 350 
    let height_card =  150
    return (
        <View style={{margin:10}}>
            <Image style={{ width:width_card, height :height_card, borderTopLeftRadius:10 ,borderTopRightRadius:10}} source={{uri:props.item.uri}} />
            <View style={{flexDirection:'row',width:width_card, height :100,borderBlockColor:'grey', opacity:100, borderWidth:1 , borderBottomRightRadius:10, borderBottomLeftRadius:10}}>
                <View style={{padding:10}}>
                    <Text style={{ fontSize:20, color : "red", textAlign:'center'}}>{props.item.month}</Text>
                    <Text style={{ fontSize:13, color : "grey", textAlign:'center'}}>{props.item.date}</Text>
                </View>
                <View style={{padding:10}}>
                    <Text style={{ fontSize:20, color : "black", fontWeight:'bold'}}>{props.item.title}</Text>
                    <Text style={{color : "grey"}}>{props.item.datetime}</Text>
                    <Text style={{color : "grey"}}>{props.item.place}</Text>
                </View>
            </View>            
        </View>
    );
}



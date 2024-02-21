import React from 'react';
import { ScrollView,  View } from 'react-native';
import Section1 from '../../components/week3/Section1';
import Section2 from '../../components/week3/Section2';
export default function Resort() {
    return (
        <ScrollView>
            <View style={{ flex: 1, paddingTop: 20 }}>
                <Section1/>     
                <Section2/> 
            </View>
        </ScrollView>
    );
}

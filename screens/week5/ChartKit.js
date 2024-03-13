import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default function ChartKitScreen() {
    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
            {
                data: [20, 45, 28, 80, 99, 43],
                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // optional
                strokeWidth: 2 // optional
            }
        ],
        legend: ["Rainy Days"] // optional
    };
    const chartConfig = {
        // backgroundColor: '#FFFFFF',
        backgroundGradientFrom: 'purple',
        backgroundGradientTo: 'blue',
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 20) => `rgba(255, 255, 255, ${opacity})`,
        style: {
            borderRadius: 10
        }
    };
    const screenWidth = Dimensions.get("window").width;

    return (
        <View style={{ flex: 1 , padding : 10, marginVertical:20 }}>            
            {/* <Text style={{ fontSize : 20 }}>
                Bezier Line Chart
            </Text> */}
            <LineChart
                data={data}
                width={screenWidth-20} // from react-native
                height={220}
                chartConfig={chartConfig}
                bezier={true}
                style={{
                    marginVertical : 10,
                    borderRadius: 20
                }}
            />
        </View>
   );

}



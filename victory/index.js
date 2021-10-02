import React from 'react';
import { NativeModules, StyleSheet, Text, View } from 'react-native';
import { VictoryPie } from "victory-native";
const VictoryPie=()=>{


const graphicData: = [
    { y: 10, x: '5%'},
    { y: 90, x: '90%'},
    { y: 50, x: '50%'},
    { y: 20, x: '20%'},
    { y: 70, x: '70%'},
    ],
    return(
        <View style={styles.container}>
        <Text style={[styles.titleText]}>Victory Pie</Text>
        <VictoryPie
        data={graphicData}
        width={250}
        height={250}
        innerRadius={50}
        style={{
        labels: {
        fill: 'white', fontSize: 15, padding: 7,}, }}
/> 
</View>
    );
        };
const styles = StyleSheet.create({
    container:{
        marginRight:100,

    },
titleText:{
    colour:'black',
    fontSize:30,
    fontFamily:"Arial",
}});
export default VictoryPie;
import React from "react";
import {StyleSheet, Text, View} from 'react-native'

const styles = StyleSheet.create({
    header : {
        height : 80,
        paddingTop : 27,
        backgroundColor : '#B799FF'
    },
    title : {
        fontWeight : 'bold',
        fontSize : 20,
        alignSelf : "center",
        color : '#ffff'
    }
})

export default function Header(){
    return (
        <View style={styles.header}>
            <Text style={styles.title}>ToDo-App</Text>
        </View>
    )
}
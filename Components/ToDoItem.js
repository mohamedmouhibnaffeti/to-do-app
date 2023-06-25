import React, { useEffect } from "react";
import {StyleSheet, Text, TouchableOpacity} from 'react-native'

const styles = StyleSheet.create({
    item : {
        padding : 16,
        marginTop : 16,
        borderColor : 'gray',
        borderWidth : 1,
        borderRadius : 10,
        fontSize : 16
    }
})

export default function ToDoItem({item, pressHandler}){
    return (
        <TouchableOpacity onPress={()=>pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
        </TouchableOpacity>
    )
}
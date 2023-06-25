import React, {useState} from 'react'
import { Text, TextInput, StyleSheet, Button, View } from 'react-native'

styles = StyleSheet.create({
    input : {
        borderBottomWidth : 1,
        borderBottomColor : 'gray',
        borderRadius : 10,
        marginBottom : 10,
        paddingHorizontal : 8,
        paddingVertical : 6,
        fontSize : 16
    }
})

export default function AddTask({tasks, addTask}){
    const [text, setText] = useState('')
    const changeHandler = (val) =>{
        setText(val)
    }
    const buttonPresshandler = () =>{
        addTask(text)
        setText('')
    }
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='New Task'
                onChangeText={changeHandler}
                value={text}
            />
            <Button onPress={()=> buttonPresshandler()} title='Add Task' color='#B799FF'/>
        </View>
    )
}
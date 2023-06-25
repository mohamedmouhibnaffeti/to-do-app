import React, {useState} from "react"
import { StyleSheet, View, FlatList } from "react-native"
import { Text } from "react-native-paper"
import Header from "./Components/Header"
import ToDoItem from "./Components/ToDoItem"
import AddTask from "./Components/AddTask"

const styles = StyleSheet.create({
  container : {
    backgroundColor : '#ACBCFF',
    flex : 1
  },
  content : {
    padding : 40
  },
  list : {
    marginTop : 20
  }
})

function App(){

  const [tasks, settasks] = useState([
    {name : 'Buy Coffee', id : 1},
    {name : 'Learn React Native', id : 2},
    {name : 'Create todo app', id : 3},
    {name : 'eat', id : 4},
    {name : 'drink', id : 6}
  ])

  const PressEventListener = (key : number) =>{
    settasks((prevTasks)=>{
      return(prevTasks.filter(task => task.id!==key))
    })
  }
  const addTask = (text : string) =>{
    settasks((prevtasks)=>{
      return [
        {name : text, id : Math.random()},
        ...prevtasks
      ]
    })
  }

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
      <AddTask tasks={tasks} addTask={addTask} />
        <View style={styles.list}>
          <FlatList
            data={tasks}
            renderItem={({item})=>(
              <ToDoItem item={item} pressHandler={PressEventListener}/>
            )}
          />
        </View>
      </View>
    </View>
  )
}
export default App
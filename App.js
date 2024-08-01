import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './components/header';
import TodoItems from './components/todoitem';
import AddTodo from './components/addtodo';
export default function App() {
  const [todos, setTodos]=useState([
    {text:'Take it and come',key:'1'},
    {text:'bring me a coffe',key:'2'},
    {text:'Take it and come',key:'3'},
  ]);
  const pressHandler=(key)=>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(todo=>todo.key!=key);
    })
  }
  const submitHandler=(text)=>{
    setTodos((prevTodos)=> {
      return [
        {text:text,key:Math.random().toString()},
        ...prevTodos
      ]
    })
  }
  

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        
        <AddTodo submitHandler={submitHandler} />
     
      <View style={styles.itemlist}>
        <FlatList 
        data={todos}
        renderItem={({item})=>(
          <TodoItems item={item}
          pressHandler={pressHandler}
          />
        )}
        />
      </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontSize:200,
    marginBottom:10,
    
  },
  itemlist:{
    
    
  },
  content:{
    margin:50,
  }

  
});

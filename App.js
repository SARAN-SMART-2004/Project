import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [name, setName]=useState('Saran');
  const [username, setUsername]=useState('');
  const [age, setAge]=useState('');
  const [pasword, setPassword]=useState('');
  const[people,setPeople]=useState([
    {name:'saran',key:'1'},
    {name:'Something',key:'2'},
    {name:'Abce',key:'3'},
    {name:'saran',key:'4'},
    {name:'saran',key:'5'},
    {name:'saran',key:'6'},
    {name:'saran',key:'7'},
    {name:'saran',key:'8'},
    {name:'saran',key:'9'},
    {name:'saran',key:'10'},

  ])
  const clickHandler=()=>{
    setName('Vaali Saran');
  }


  return (
    <View style={styles.container}>
      
      <Text style={styles.fontStyle}>Saran's app!</Text>
      <View style={styles.allign}>
        <Text>State is :{name}</Text>
        <Text>Username is :{username}</Text>
        <Text>Age is :{age}</Text>
        <Text>Password is :{pasword}</Text>
        <Button onPress={clickHandler}title='Change ME'/>
      </View>
      
      <View >
        <TextInput 
        style={styles.input}
        placeholder='Enter Name'
        onChangeText={(val)=>setUsername(val)}
        />
        <TextInput 
        style={styles.input}
        placeholder='Enter Age'
        onChangeText={(val)=>setAge(val)}
        />
        <TextInput 
        style={styles.input}
        placeholder='Enter Password'
        onChangeText={(val)=>setPassword(val)}
        />
      </View>
      <FlatList 
      data={people}
      renderItem={(item)=>(
        <Text style={styles.itemlist}>
          {item.name}
        </Text>
      )}
      />
     
      {/* <View key={people.key} >
        {people.map((item)=>{
          return(
            <View style={styles.list}>
              <Text>
                {item.name}
              </Text>
            </View>
          )
        })}
      </View> */}
      


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin:40,
    alignItems: 'center',
    fontSize:200,
    // justifyContent: 'center',
  },
  allign:{
    alignItems: 'center',
    justifyContent:'space-between',

  },
  input:{
    borderWidth:1,
    padding:8,
    margin:10,
    width:200,
  },
  fontStyle:{
    fontWeight:'bold',
    margin:20,
  },
  list:{
    margin:20,
  },
  itemlist:{
    fontWeight:'bold',
    color:'black',
  },
});

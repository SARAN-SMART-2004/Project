import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function AddTodo({submitHandler}){
    const [text,setText]=useState('');
    const changeHandler=(val)=>{
        setText(val);
    }
    return(
        <View>
            <TextInput 
            style={styles.inputtodo}
            placeholder='Enter todo.....'
            onChangeText={changeHandler}

            />
            <View style={styles.btn}>
                <Button
                
                onPress={()=>{
                    submitHandler(text)

                }}
                title='Add Todo'
                color='coral'
                
                />
            </View>

           
        </View>
    )
}
const styles=StyleSheet.create({

    inputtodo:{
        marginBottom:20,
        marginHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:'#ddd',
    },
    btn:{
        
    },
})
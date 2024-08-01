import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function TodoItems({item,pressHandler}){
    return(
            <TouchableOpacity onPress={()=>pressHandler(item.key)}>
                <View style={styles.item}>
                    <MaterialIcons name="delete" size={24} color="black" /> 
                    <Text style={styles.itemList}>{item.text}</Text>
                       
                </View>

            </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    item:{
        padding:16,
        marginTop:20,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10,
        flexDirection:'row'
    },
    itemList:{
        marginLeft:10,
        
    }
})
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function TodoItems({item,pressHandler}){
    return(
            <TouchableOpacity onPress={()=>pressHandler(item.key)}>
                <Text style={styles.item}>{item.text}</Text>
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


    }
})
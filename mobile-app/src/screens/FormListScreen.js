import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
export default function FormListScreen({navigation}){
  const [forms,setForms]=useState([]);
  useEffect(()=>{
    const fetch=async()=>{
      const token=await AsyncStorage.getItem('token');
      const {data}=await axios.get('https://YOUR_BACKEND_URL/api/forms',{headers:{Authorization:'Bearer '+token}});
      setForms(data);
    };
    fetch();
  },[]);
  return(
    <FlatList data={forms} keyExtractor={item=>item.id.toString()}
      renderItem={({item})=>(
        <TouchableOpacity onPress={()=>navigation.navigate('Fill',{form:item})}>
          <View style={{padding:20,borderBottomWidth:1}}><Text>{item.name}</Text></View>
        </TouchableOpacity>
      )}/>
  );
}
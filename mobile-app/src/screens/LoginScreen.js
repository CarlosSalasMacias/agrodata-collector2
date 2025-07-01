import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
export default function LoginScreen({navigation}){
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const login=async()=>{
    const {data}=await axios.post('https://YOUR_BACKEND_URL/api/auth/login',{username,password});
    await AsyncStorage.setItem('token',data.token);
    navigation.navigate('Forms');
  };
  return(
    <View style={{padding:20}}>
      <Text>Usuario</Text>
      <TextInput value={username} onChangeText={setUsername}/>
      <Text>Contraseña</Text>
      <TextInput secureTextEntry value={password} onChangeText={setPassword}/>
      <Button title='Entrar' onPress={login}/>
    </View>
  );
}
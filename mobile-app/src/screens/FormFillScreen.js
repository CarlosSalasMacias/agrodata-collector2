import React,{ useState } from 'react';
import { ScrollView, View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
export default function FormFillScreen({route,navigation}){
  const {form}=route.params;
  const [answers,setAnswers]=useState({});
  const handleChange=(q,value)=>{setAnswers({...answers,[q.label]:value});}
  const submit=async()=>{
    // offline support: store local if no internet
    try{
      const token=await AsyncStorage.getItem('token');
      await axios.post('https://YOUR_BACKEND_URL/api/submissions',
        {formId:form.id,data:answers},
        {headers:{Authorization:'Bearer '+token}}
      );
      navigation.goBack();
    }catch(err){
      const unsynced=JSON.parse(await AsyncStorage.getItem('unsynced')||'[]');
      unsynced.push({formId:form.id,data:answers});
      await AsyncStorage.setItem('unsynced',JSON.stringify(unsynced));
      navigation.goBack();
    }
  };
  return(
    <ScrollView style={{padding:20}}>
      {form.schema.questions.map((q,index)=>(
        <View key={index} style={{marginBottom:15}}>
          <Text>{q.label}</Text>
          <TextInput placeholder={q.label} onChangeText={val=>handleChange(q,val)}/>
        </View>
      ))}
      <Button title='Enviar' onPress={submit}/>
    </ScrollView>
  );
}
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import FormListScreen from './src/screens/FormListScreen';
import FormFillScreen from './src/screens/FormFillScreen';

const Stack = createStackNavigator();
export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Forms' component={FormListScreen}/>
        <Stack.Screen name='Fill' component={FormFillScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
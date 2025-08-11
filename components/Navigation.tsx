// Navigation.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen'
import calculator from './calculator'

export function Library({ navigation }: any) {
  return (
    <>
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Home</Text>
    </View>
    <View>

      <Button title="Go to Home" onPress={() => navigation.navigate('Home',{id:1})}/>
      <Button title="Go to calculator" onPress={() => navigation.navigate('calculator',{id:2})}/>
    </View>
    </>
  );
}

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Library">
        <Stack.Screen name="Library" component={Library}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="calculator" component={calculator}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
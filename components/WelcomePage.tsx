import React, { useEffect, useState } from 'react';
import { View, Text, Button, ActivityIndicator, Pressable } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import DefaultPage from './DefaultPage';

export default function WelcomePage({ navigation }: any) {
  return (
    <View>
      <Text>Welcome</Text> 
        <Pressable onPress={() => navigation.navigate('DefaultPage')}>
        <Text>Go to Dashboard</Text>
        </Pressable>     
    </View>
  );
} 

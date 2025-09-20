// Navigation.tsx
import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Test from './TEST';
import chatscreen from './src/pages/DashboardPage';
import ProfileScreen from './src/pagescomponent/ProfileScreen'
import uuid from 'react-native-uuid';
import io from 'socket.io-client';
import { v4 as uuidv4 } from 'uuid';


//add v4
export const deviceId = uuidv4();
const socket = io('http://localhost:3000', {
  query: { userId: deviceId } // pass it to server
});


export function Library({ navigation }: any) {
  return (
    <View className="flex-1 bg-black p-6">
      {/* Title */}
      <View className="flex-1 items-center justify-center">
        <Text className="text-white text-3xl font-bold tracking-wide">
        Welcome
        </Text>
      </View>

      {/* Buttons */}
      <View className="pb-10">
        <TouchableOpacity
          className="mb-4 border border-white rounded-full py-3 items-center active:opacity-70"
          onPress={() => navigation.navigate('Home', { id: 1 })}
        >
          <Text className="text-white text-lg font-semibold">
            Go to chats
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="border border-white rounded-full py-3 items-center active:opacity-70"
          onPress={() => navigation.navigate('Profile', { id: 3 })}
        >
          <Text className="text-white text-lg font-semibold">
            Go to Profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const Stack = createNativeStackNavigator();

export default function DefaultPage() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Library">
        <Stack.Screen name="Library" component={Library}/>
        <Stack.Screen name="Home" component={chatscreen}/>
        <Stack.Screen name="Profile" component={ProfileScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}



// import AsyncStorage from '@react-native-async-storage/async-storage';

// const getDeviceId = async () => {
//   let deviceId = await AsyncStorage.getItem('device_uuid');

//   if (!deviceId) {
//     deviceId = uuid.v4();
//     await AsyncStorage.setItem('device_uuid', deviceId);
//   }

//   return deviceId;
// };





// Generate a new UUID
// example: 'f47ac10b-58cc-4372-a567-0e02b2c3d479'
// import { View, Text, TouchableOpacity } from 'react-native';
//node add image 
//note upgraded ui



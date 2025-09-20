import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import RecentChats from '../pagescomponent/RecentChats';
import Settings from '../pagescomponent/Settings';
import ProfileScreen from '../pagescomponent/ProfileScreen';
// function Profile() {
//   return (
//     <SafeAreaView className="flex-1 bg-black justify-center items-center">
//       <Text className="text-white text-xl font-bold">This is Profile</Text>
//     </SafeAreaView>
//   );
// }

const Tab = createBottomTabNavigator();

export default function ChatScreen() {
  return (
    // <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: 'black' },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Chats" component={RecentChats} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    // </NavigationContainer>
  );
}

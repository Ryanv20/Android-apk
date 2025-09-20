


import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

type StatusType = 'online' | 'offline' | 'busy' | 'away';

interface Chat {
  id: number;
  name: string;
  status: StatusType;
}

const chatsPlaceholder: Chat[] = [
  { id: 1, name: 'Alice', status: 'online' },
  { id: 2, name: 'Bob', status: 'offline' },
  { id: 3, name: 'Charlie', status: 'busy' },
  { id: 4, name: 'Diana', status: 'away' },
  { id: 5, name: 'Eve', status: 'online' },
  { id: 6, name: 'Frank', status: 'offline' },
];

const getStatusColor = (status: StatusType) => {
  switch (status) {
    case 'online':
      return 'bg-green-500';
    case 'offline':
      return 'bg-gray-500';
    case 'busy':
      return 'bg-red-500';
    case 'away':
      return 'bg-yellow-500';
    default:
      return 'bg-gray-400';
  }
};

export default function RecentChats() {
  return (
  <>
      <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-black">
      <Text className="text-white text-xl font-bold p-4">Recent Chats</Text>
        <ScrollView className="px-4">
          {chatsPlaceholder.map((chat) => (
                    <View
                      key={chat.id}
                      className="mt-2 w-70 h-17 bg-white rounded-xl mx-2 p-4 justify-between"
                    >
                      <Text className="text-black font-semibold">{chat.name}</Text>
                      <View className={`w-4  h-4 rounded-full self-end ${getStatusColor(chat.status)}`} />
                    </View>
                  ))}
        </ScrollView> 
      </SafeAreaView>
      </SafeAreaProvider>
  </>
  );
}



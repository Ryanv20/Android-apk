import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Settings() {
  return (
    <SafeAreaView className="flex-1 bg-black justify-center items-center">
      <Text className="text-white text-xl font-bold">This is Settings</Text>
    </SafeAreaView>
  );
}

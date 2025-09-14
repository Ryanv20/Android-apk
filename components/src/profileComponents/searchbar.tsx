// SearchUser.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function SearchUser() {
  const [query, setQuery] = useState('');

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-xl font-semibold mb-3">Search for a User</Text>  
      
      <TextInput
        className="border border-gray-300 rounded p-2 mb-3"
        placeholder="Enter username or ID"
        value={query}
        onChangeText={setQuery}
      />

      <Button title="Search" onPress={() => console.log('Searching for:', query)} />
    </View>
  );
}

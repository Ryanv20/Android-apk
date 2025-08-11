import { View, Text, Button, TextInput } from 'react-native';

export default function HomeScreen() {
  return (
    <View>
      <Text>Sender Page</Text>
        <View>
            <TextInput
            className="w-4/5 h-12 border border-gray-300 rounded-lg px-3 text-base"
            placeholder="Type something..."
            />
        </View>
    </View>
  );
}

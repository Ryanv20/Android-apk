import { View, Text, Button, TextInput } from 'react-native';
import MessageList from './src/messagecomponent/messagelist';
import Messagesend from './src/messagecomponent/messagesend';
export default function HomeScreen() {
  return (
    <>
    <View>
      <Text>Chatpage</Text>
       <MessageList />
       <Messagesend />
    </View>
    </>
  );
}

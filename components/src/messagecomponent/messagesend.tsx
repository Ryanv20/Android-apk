import { useState, useEffect } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { initSocket, sendMessage } from "../service/socketservice";

export default function Messagesend() {
  const [text, setText] = useState("");

  useEffect(() => {
    initSocket(); // Ensure socket is connected
  }, []);

  const handleSend = () => {
    if (text.trim() !== "") {
      sendMessage(text);  // send to server
      setText("");        // clear input
    }
  };

  return (
    <View>
      <Text>Send</Text>
      <TextInput
        className="w-4/5 h-12 border border-gray-300 rounded-lg px-3 text-base"
        placeholder="Type something..."
        value={text}
        onChangeText={setText}
      />
      <Button title="Send" onPress={handleSend} />
    </View>
  );
}

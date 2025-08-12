import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { initSocket, onMessageReceived } from "../service/socketservice"

export default function Messagelist() {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    initSocket(); // Ensure socket is connected

    // Listen for messages from server
    onMessageReceived((msg) => {
      setMessages((prev) => [...prev, msg]);
    });
  }, []);

  return (
    <View>
      <Text>Messages</Text>
      {messages.map((msg, i) => (
        <Text key={i}>{msg}</Text>
      ))}
    </View>
  );
}

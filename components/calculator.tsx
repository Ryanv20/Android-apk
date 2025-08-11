import { View, Text, Button, TextInput, Pressable } from 'react-native';

export default function calculator() {
  return (
    <View>
        <View>
            <TextInput
            className="w-4/5 h-12 border border-gray-300 rounded-lg px-3 text-base"
            placeholder="Type something..."
            />
        </View>
            <CalculatorButton label="1" onPress={() => console.log("Pressed")} />
            <CalculatorButton label="2" onPress={() => console.log("Pressed")} />
            <CalculatorButton label="3" onPress={() => console.log("Pressed")} />
            <CalculatorButton label="4" onPress={() => console.log("Pressed")} />
            <CalculatorButton label="5" onPress={() => console.log("Pressed")} />
            <CalculatorButton label="6" onPress={() => console.log("Pressed")} />
            <CalculatorButton label="7" onPress={() => console.log("Pressed")} />
            <CalculatorButton label="8" onPress={() => console.log("Pressed")} />
            <CalculatorButton label="9" onPress={() => console.log("Pressed")} />
            <CalculatorButton label="+" onPress={() => console.log("Pressed")} />
            <CalculatorButton label="-" onPress={() => console.log("Pressed")} />
            {/* action btn */}
            <CalculatorButton label="1" onPress={() => console.log("Pressed")} />

    </View>
  );
}

function CalculatorButton({ label, onPress, className = "" }) {
  return (
    <Pressable
      onPress={() => console.log("Pressed 1")}
      className={`bg-blue-500 w-5px items-center justify-center rounded-lg ${className}`}
    >
      <Text className="text-white text-[18px] font-bold">{label}</Text>
    </Pressable>
  );
}
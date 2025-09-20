// SearchUser.tsx
import React from 'react';
import { View, Text, TextInput, Button, Pressable } from 'react-native';
import { getUserID, initSocket } from  "../../service/socketservice"
import DeviceInfo from 'react-native-device-info';
import { deviceId } from 'components/DefaultPage';
// or ES6+ destructured imports
import { getUniqueId, getManufacturer, getMacAddress } from 'react-native-device-info';

const Linkaddress = getMacAddress()
const userID = getUserID()
const ProfileData = () => {
  return (
    <>
    <View className="flex-1 bg-white p-4">
        <Pressable>Profile Page</Pressable>
        
        <Text>device id:{Linkaddress}</Text>
        <View>{userID}</View>
        <Text>Name: { '{name}' }</Text>
        <Text>Username: { '{username}' }</Text>
        <Text>client ID: <View>{userID}</View></Text>
        <Text>Device ID: <View>{deviceId}</View></Text>
        </View>
        </> 
  );
};

export default ProfileData;

import { View, Text, TextInput, Pressable } from "react-native";
import ProfileData from "../profileComponents/profileData"
import SearchUser from "../profileComponents/searchbar";

export default function Calculator() {
  return (
    <>
    <View>
        <ProfileData />
        <SearchUser />
    </View>
    </>
  );
}
//just like create text tags with placeholders '{}' for all the info i might need
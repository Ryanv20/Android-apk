import { View, Text, TextInput, Pressable } from "react-native";
import ProfileData from "./src/profileComponents/profileData"
import SearchUser from "./src/profileComponents/searchpage";

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
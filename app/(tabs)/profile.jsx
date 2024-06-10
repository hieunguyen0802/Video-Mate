import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useContext } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import CustomButton from '../../components/CustomButton';
import { AuthContext } from '../../context/AuthContext';
import { router } from 'expo-router';
import { signOut } from '../../lib/appwrite';


const Profile = () => {

  const {setIsLoggedIn, setUser} = useContext(AuthContext)

  const handleSignOut = async () => {
    setIsLoggedIn(false);
    setUser(null);
    await signOut();
    router.replace("/")
  }
  
  return (
    <View className="text-center justify-center items-center bg-white flex-1">
      <Text>Profile</Text>
      <CustomButton buttonLabel="Sign Out" onPress={handleSignOut}/>
    
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})
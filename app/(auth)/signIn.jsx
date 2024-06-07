import { View, Text, Image, ScrollView } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'

import CustomInputField from '../../components/CustomInputField'
import CustomButton from '../../components/CustomButton'



const SignIn = () => {

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const handleSignIn = () => {

  }

  const [isSubmitting, setIsSubmitting] = useState(false)

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-85vh px-4 my-6">

          <View className="items-center justify-center">
            <Image source = {{uri: 'https://cdn.pixabay.com/photo/2022/08/22/03/19/logo-7402592_960_720.png'}}
              className="w-[230px] h-[184px]" resizeMode="cover" />
            <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">Sign In to Climbmate</Text>
          </View>

          
          <CustomInputField fieldLabel="Email" value = {form.email}
            handleChangeText={(e) => setForm({...form, email: e})} otherStyles="mt-7" keyboardType="email-address" placeHolder="email"
          />

          <CustomInputField fieldLabel="Password" value = {form.password} placeHolder="password"
            handleChangeText={(e) => setForm({...form, password: e})} otherStyles="mt-7" 
          />

          <CustomButton  buttonLabel="Sign In" onPress={handleSignIn} containerStyles="mt-7" isLoading={isSubmitting}/>

          <View className="justify-center pt-5 gap-3 flex-row">
            <Text className="text-lg text-gray-100 font-pregular">
              New to Climbmate  ?   
            </Text>
            <Link href="/signUp" className='text-lg font-psemibold text-secondary'>Sign Up</Link>

          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn
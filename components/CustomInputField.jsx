import { View, Text, TextInput } from 'react-native'
import React, {useState} from 'react'
import { TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

const CustomInputField = ({fieldLabel, value, handleChangeText, otherStyles, keyboardType, placeHolder, ...props}) => {

const [isShowPassword, setIsShowPassword] = useState(false)
  return (
    <View className={`space-y-2 ${otherStyles}`}>
        <Text className="text-base text-gray-100 font-pmedium">{fieldLabel}</Text>
        <View className="w-full h-16 px-4 bg-black-100 border-2 rounded-2xl border-black-200 focus:border-secondary-100 items-center flex-row">
        <TextInput className="flex-1 text-white font-psemibold text-base w-full"
            value={value}
            placeholder={placeHolder}
            placeholderTextColor="#7b7b8b"
            onChangeText={handleChangeText}   
            secureTextEntry={fieldLabel.includes('Password') && !isShowPassword}
        />
        {fieldLabel.includes('Password') && (
            <TouchableOpacity onPress={() => setIsShowPassword(!isShowPassword)}>
                <Ionicons name={!isShowPassword ? "eye-outline" : "eye-off-outline"} size = {24} />
            </TouchableOpacity>
        )}
        </View>
    </View>
  )
}

export default CustomInputField
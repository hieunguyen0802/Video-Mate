import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const SearchInput = ({
  fieldLabel,
  value,
  handleChangeText,
  otherStyles,
  keyboardType,
  placeHolder,
  ...props
}) => {
  return (
    <View className="w-full h-16 px-4 bg-black-100 border-2 rounded-2xl border-black-200 focus:border-cyan-400 items-center flex-row space-x-4">
      <TextInput
        className="text-base mt-0.5 text-white flex-1 font-pregular"
        value={value}
        placeholder={placeHolder}
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
      />
      <Ionicons name="search" size={20} onPress={() => console.log("object")} />
    </View>
  );
};

export default SearchInput;

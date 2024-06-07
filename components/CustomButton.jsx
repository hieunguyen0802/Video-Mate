import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const CustomButton = ({
  buttonLabel,
  onPress,
  containerStyles,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      className={`bg-secondary-100 rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      activeOpacity={0.7}
      disabled={isLoading}
      onPress={onPress}
    >
      <Text className={`text-white font-psemibold text-lg ${textStyles}`}>{buttonLabel}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

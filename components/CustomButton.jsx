import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const CustomButton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading,
  isDisabled,
}) => {
  return (
    <TouchableOpacity
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center opacity-85 w-50 disabled:bg-gray-400
      ${containerStyles} 
      ${isLoading ? "opacity-50" : ""}`}
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={isLoading || isDisabled}
      style={isDisabled ? styles.disabled : ""}
    >
      <Text className={`text-primary text-lg font-psemibold ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  disabled: { backgroundColor: "lightgray" },
});

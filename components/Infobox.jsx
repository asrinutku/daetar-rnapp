import { View, Text } from "react-native";
import React from "react";

const Infobox = ({ title, subtitle, containerStyles, textStyles }) => {
  return (
    <View className={containerStyles}>
      <Text className={`text-white text-center font-psemibold ${textStyles}`}>
        {title}
      </Text>
      <Text className={`text-gray text-sm text-center font-pregular}`}>
        {subtitle}
      </Text>
    </View>
  );
};

export default Infobox;

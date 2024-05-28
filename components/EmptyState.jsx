import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import { images } from "../constants";
import CustomButton from "./CustomButton";
import { router } from "expo-router";

const EmptyState = (props) => {
  return (
    <View className="justify-center items-center px-4">
      <Image
        source={images.empty}
        className="w-[270px] h-[215px] m-0"
        resizeMode="contain"
      />

      <Text className="font-pmedium text-sm text-gray-100">{props.title}</Text>
      <Text className="font-psemibold text-xl  text-white mt-2">
        {props.subtitle}
      </Text>

      <CustomButton
        title="Video oluştur"
        handlePress={() => router.push("/create")}
        containerStyles="w-full my-5"
      />
    </View>
  );
};

export default EmptyState;

const styles = StyleSheet.create({});

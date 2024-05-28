import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

const TrendVideos = ({ posts }) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View>
          <Text className="text-3xl text-white">{item.id}</Text>
        </View>
      )}
      horizontal
    />
  );
};

export default TrendVideos;

const styles = StyleSheet.create({});

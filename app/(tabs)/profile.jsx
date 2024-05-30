import { FlatList, Image, Text, View } from "react-native";
import React from "react";

import EmptyState from "../../components/EmptyState";
import { SafeAreaView } from "react-native-safe-area-context";
import VideoCard from "../../components/VideoCard";
import { getUserVideos } from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppwrite";
import { useGlobalContext } from "../../context/GlobalProvider";
import { TouchableOpacity } from "react-native";

import { icons } from "../../constants";

const Profile = () => {
  const { user, setUser, setIsLoggedIn } = useGlobalContext();
  const { data: videos, refetch } = useAppwrite(() => getUserVideos(user.$id));

  const logout = () => {};

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={videos}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <VideoCard
            title={item.title}
            thumbnail={item.thumbnail}
            video={item.video}
            creator={item.creator.username}
            avatar={item.creator.avatar}
          />
        )}
        ListHeaderComponent={() => (
          <View className="w-full justify-center items-center mt-4 mb-12 px-4">
            <TouchableOpacity
              className="w-full items-end mr-4"
              onPress={() => logout()}
            >
              <Image
                source={icons.logout}
                className="w-6 h-6"
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="Video Bulunamadı"
            subtitle="Bu arama için sonuç bulunamadı :("
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;

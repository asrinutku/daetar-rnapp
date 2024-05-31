import { FlatList, Image, View, TouchableOpacity } from "react-native";
import React from "react";

import EmptyState from "../../components/EmptyState";
import { SafeAreaView } from "react-native-safe-area-context";
import VideoCard from "../../components/VideoCard";
import { getUserVideos, signOut } from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppwrite";
import { useGlobalContext } from "../../context/GlobalProvider";

import { icons } from "../../constants";
import Infobox from "../../components/Infobox";
import { router } from "expo-router";

const Profile = () => {
  const { user, setUser, setIsLoggedIn } = useGlobalContext();
  const { data: videos, refetch } = useAppwrite(() => getUserVideos(user.$id));

  const logout = async () => {
    await signOut();
    setUser(null);
    setIsLoggedIn(false);

    router.replace("/sign-in");
  };

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

            <View className="w-16 h-16 border border-secondary rounded-lg justify-center items-center">
              <Image
                source={{ uri: user?.avatar }}
                className="w-[90%] h-[90%] rounded-lg"
                resizeMode="cover"
              />
            </View>

            <Infobox
              title={user?.name}
              containerStyles="mt-5"
              textStyles="text-lg"
            />

            <View className="mt-5 flex-row">
              <Infobox
                title={videos?.length || 0}
                subtitle="Videolarım"
                containerStyles="mr-10"
                textStyles="text-xl"
              />
              <Infobox title="1.2k" subtitle="Takipçi" textStyles="text-xl" />
            </View>
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

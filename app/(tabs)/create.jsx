import * as DocumentPicker from "expo-document-picker";

import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { ResizeMode, Video } from "expo-av";

import CustomButton from "../../components/CustomButton";
import FormField from "../../components/FormField";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../constants";

const Create = () => {
  const [uploading, setUploading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    video: null,
    thumbnail: null,
    prompt: "",
  });

  const openPicker = async (type) => {
    const picked = await DocumentPicker.getDocumentAsync({
      type:
        type === "video"
          ? ["video/mp4", "video/gif"]
          : ["image/png", "image/jpg"],
    });

    if (!picked.canceled) {
      if (type === "image") {
        setForm({
          ...form,
          thumbnail: picked.assets[0],
        });
      }

      if (type === "video") {
        setForm({
          ...form,
          video: picked.assets[0],
        });
      }
    }
  };

  const handleSubmit = () => {};

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="px-4 my-6">
        <Text className="text-2xl text-white font-psemibold">Video Yükle</Text>

        <FormField
          title="Video Başlığı"
          value={form.title}
          placeholder="Videonuza bir başlık verin"
          handleChangeText={(e) => setForm({ ...form, title: e })}
          otherStyles="mt-10"
        />

        <View className="mt-7 space-y-2">
          <Text className="text-base text-gray-100 font-pmedium">
            Video Yükle
          </Text>

          <TouchableOpacity onPress={() => openPicker("video")}>
            {form.video ? (
              <Video
                source={{ uri: form.video.uri }}
                useNativeControls
                className="w-full h-64 rounded-2xl"
                resizeMode={ResizeMode.COVER}
                isLooping
              />
            ) : (
              <View className="w-full h-40 px-4 bg-black-100 rounded-2xl border border-black-200 flex justify-center items-center">
                <View className="w-14 h-14 border border-dashed border-secondary-100 flex justify-center items-center">
                  <Image
                    source={icons.upload}
                    resizeMode="contain"
                    alt="upload"
                    className="w-1/2 h-1/2"
                  />
                </View>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <View className="mt-7 space-y-2">
          <Text className="text-base text-gray-100 font-pmedium">
            Küçük Resim
          </Text>

          <TouchableOpacity onPress={() => openPicker("image")}>
            {form.thumbnail ? (
              <Image
                source={{ uri: form.thumbnail.uri }}
                resizeMode="cover"
                className="w-full h-64 rounded-2xl"
              />
            ) : (
              <View className="w-full h-16 px-4 bg-black-100 rounded-2xl justify-center items-center border-2 border-black-200 flex-row space-x-2">
                <Image
                  source={icons.upload}
                  className="w-5 h-5"
                  resizeMode="contain"
                />

                <Text className="text-white text-sm font-pmedium">
                  Dosya seçin
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <FormField
          title="AI Prompt"
          value={form.title}
          placeholder="Videonuzu oluşturduğunuz ai prompt"
          handleChangeText={(e) => setForm({ ...form, promp: e })}
          otherStyles="mt-7"
        />

        <CustomButton
          title="Yükle"
          handlePress={handleSubmit}
          containerStyles="mt-7"
          isLoading={uploading}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;

const styles = StyleSheet.create({});

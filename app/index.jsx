import { Image, ScrollView, Text, View } from "react-native";

import CustomButton from "../components/CustomButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { images } from "../constants";
import { Redirect, router } from "expo-router";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full items-center justify-center min-h-[85vh] px-4">
          <Image
            source={images.logo}
            className="w-[145px] h-[92px] mb-0"
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[200px] mt-0"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-secondary-200 font-bold text-center">
              Daetar{" "}
              <Text className="text-white">
                İle Sınırsız İçerikleri Keşfedin
              </Text>
            </Text>

            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute top-8 left-0"
              resizeMode="contain"
            />
          </View>

          <CustomButton
            title="Email ile Devam Et"
            handlePress={() => router.push("/sign-in")}
            containerStyles="w-3/4 mt-10"
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}

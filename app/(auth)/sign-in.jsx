import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";

import FormField from "../../components/FormField";

import { CustomButton } from "../../components/CustomButton";
import { Link } from "expo-router";

const SignIn = () => {
  const [signInForm, setSignInForm] = useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignIn = () => {};

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full h-full  px-4 my-6 min-h-[85vh]">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[145px] h-[92px]"
          />

          <Text className="text-bold text-xl font-psemibold mt-2 text-white">
            Giriş Yapın
          </Text>

          <FormField
            title="Email"
            value={signInForm.email}
            handleChangeText={(e) => setSignInForm({ ...signInForm, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={signInForm.password}
            handleChangeText={(e) =>
              setSignInForm({ ...signInForm, password: e })
            }
            otherStyles="mt-7"
          />

          <View className="justify-center pt-5 flex-row">
            <Link
              href="/sign-up"
              className="text-secondary text-lg font-psemibold"
            >
              Hesabınız Yok mu ?
            </Link>
          </View>

          <CustomButton
            title="Giriş Yap"
            handlePress={handleSignIn}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});

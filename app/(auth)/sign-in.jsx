import { Alert, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";

import FormField from "../../components/FormField";

import CustomButton from "../../components/CustomButton";
import { Link, router } from "expo-router";

import { getCurrentUser, signIn } from "../../lib/appwrite";
import { useGlobalContext } from "@/context/GlobalProvider";

const SignIn = () => {
  const { setUser, setIsLoggedIn } = useGlobalContext();

  const [signInForm, setSignInForm] = useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignIn = async () => {
    setIsSubmitting(true);

    try {
      await signIn(signInForm.email, signInForm.password);

      const result = await getCurrentUser();

      setUser(result);
      setIsLoggedIn(true);

      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full h-full px-4 my-6 justify-center">
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
            otherStyles="mt-8"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={signInForm.password}
            handleChangeText={(e) =>
              setSignInForm({ ...signInForm, password: e })
            }
            otherStyles="mt-4"
          />

          <CustomButton
            title="Giriş Yap"
            handlePress={handleSignIn}
            containerStyles="mt-16"
            isLoading={isSubmitting}
            isDisabled={!signInForm.email || !signInForm.password}
          />

          <View className="justify-center pt-5 flex-row">
            <Link
              href="/sign-up"
              className="text-secondary text-lg font-psemibold"
            >
              Hesabınız Yok mu ?
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({});

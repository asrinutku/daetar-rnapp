import { Alert, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";

import FormField from "../../components/FormField";

import CustomButton from "../../components/CustomButton";
import { Link, router } from "expo-router";
import { createUser } from "../../lib/appwrite";

const SignUp = () => {
  const [signInForm, setSignInForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignUp = async () => {
    setIsSubmitting(true);

    try {
      const result = await createUser(
        signInForm.email,
        signInForm.password,
        signInForm.username
      );

      // set global

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
            Kayıt Olun
          </Text>

          <FormField
            title="Kullanıcı Adı"
            value={signInForm.username}
            handleChangeText={(e) =>
              setSignInForm({ ...signInForm, username: e })
            }
            otherStyles="mt-4"
            keyboardType="email-address"
          />

          <FormField
            title="Email"
            value={signInForm.email}
            handleChangeText={(e) => setSignInForm({ ...signInForm, email: e })}
            otherStyles="mt-4"
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
            title="Kayıt Ol"
            handlePress={handleSignUp}
            containerStyles="mt-16"
            isLoading={isSubmitting}
            isDisabled={
              !signInForm.username || !signInForm.email || !signInForm.password
            }
          />

          <View className="justify-center pt-5 flex-row">
            <Link
              href="/sign-in"
              className="text-secondary text-lg font-psemibold"
            >
              Zaten Hesabınız Var mı ?
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});

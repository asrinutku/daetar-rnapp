import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";

import { useColorScheme } from "@/components/useColorScheme";
import { Text, View } from "react-native";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <View className="flex-1 items-center justify-center bg-white">
        <Text className="text-3xl font-pblack">Daetar!</Text>
        <StatusBar style="auto" />
        <Link href="/home" style={{ color: "blue" }}>
          Home
        </Link>
      </View>
    </ThemeProvider>
  );
}

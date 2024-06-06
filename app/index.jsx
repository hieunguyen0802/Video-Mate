import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, ScrollView, View, Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

import { images } from "../constants";

export default function App() {
  useEffect(() => {
    console.log( typeof images.logo);
  }, []);
  return (
    <SafeAreaView  className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center h-full px-4">
        
            <Image source={images.logo}
            width={100}
             height={100} 
             resizeMode="contain" />
            <Text className="text-white text-5xl" >{images.logo + 1}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

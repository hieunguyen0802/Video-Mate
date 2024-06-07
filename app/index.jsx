
import { Text, ScrollView, View, Image, TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect, router } from "expo-router";

import CustomButton from "../components/CustomButton";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <SafeAreaView  className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full h-full justify-around items-center px-4 flex-col"> 
          <Image source = {{uri: 'https://cdn.pixabay.com/photo/2022/08/22/03/19/logo-7402591_1280.png'}}
            className="w-[230px] h-[184px]" resizeMode="contain" />
          
          <Text className="text-center text-white text-3xl font-bold">Hiking & climbing guide with 
            <Text className="text-secondary-200"> Climbmate </Text> 
          </Text>

          <CustomButton  
            buttonLabel="Continue with email" containerStyles="w-11/12 mt-7"
            onPress={() => router.push('/signIn')} 
          />

        </View>
        
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light"/>
    </SafeAreaView>
  );
}

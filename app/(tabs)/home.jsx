import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "../../components/SearchInput";
import { Button, Card, Text as TextPaper } from "react-native-paper";

const Home = () => {
  // const {user } = useContext(AuthContext)
  // console.log(Object.keys(user).map((key)=> [key, user[key]])[0])

  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "A Beginner’s Guide To Climbing—Essentials For Getting Started",
      author: "User 1",
      createdTime: "Monday",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
      author: "User 2",
      createdTime: "Monday",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
      author: "User 3",
      createdTime: "Monday",
    },
    {
      id: "58694a0f-3da1-471f-bd96-",
      title: "Third Item",
      author: "User 3",
      createdTime: "Monday",
    },
  ];

  const ListItem = ({ item }) => (
    <View>
      <Card
        className="bg-primary border-2 rounded-2xl border-white my-4 px-4"
        onPress={() => console.log("object")}
      >
        <Card.Content>
          <Text className="text-white text-lg flex-wrap mb-2">
            {item.title}
          </Text>
        </Card.Content>
        <Card.Content>
          <Text className="text-white flex-wrap italic mb-2">
            {item.author} - {item.createdTime}
          </Text>
        </Card.Content>
        <Card.Cover
          className="mb-4"
          source={{ uri: "https://picsum.photos/300" }}
        />
      </Card>
    </View>
  );

  return (
    <SafeAreaView className=" bg-primary flex-1">
      {/* top header section */}

      <View className="flex my-6 px-4 space-y-6">
        <View className="flex justify-between items-start flex-row mb-3">
          <View>
            <Text className="font-pmedium text-sm text-gray-100">
              Welcome Back
            </Text>
            <Text className="text-2xl font-psemibold text-white">Username</Text>
          </View>

          <View>
            <Image
              source={{
                uri: "https://cdn.pixabay.com/photo/2022/08/22/03/19/logo-7402592_960_720.png",
              }}
              className="w-16 h-16"
              resizeMode="cover"
            />
          </View>
        </View>
      </View>

      {/* search input */}
      <View className="mx-2 px-2">
        <SearchInput />
      </View>

      {/* Title */}
      <Text className="text-white text-xl font-pmedium text-center mt-5">
        Featured Guides
      </Text>

      <ScrollView className="mx-3 px-3">
        <FlatList
          data={DATA}
          renderItem={({ item }) => <ListItem item={item} />}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

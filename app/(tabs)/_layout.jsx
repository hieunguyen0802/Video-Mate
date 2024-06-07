import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

const TabIcon = ({ icon, iconName, color, focused }) => {
  return (
    <View className="items-center justify-center gap-2">
      <Ionicons name={icon} size={24} color={color} />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs` } style={{color: color}}
      >
        {iconName}
      </Text>
    </View>
  );
};

const TabLayout = () => {
 

  return (
    <>
      <Tabs screenOptions={{ tabBarShowLabel: false, tabBarActiveTintColor:"#FFA001",
        tabBarInactiveTintColor: "#CDCDE0",
        tabBarStyle: {height: 64, backgroundColor: '#161622', borderTopWidth: 1, 
        borderTopColor: "#232533"}, 
        
        }}
        >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon="home"
                color={color}
                iconName="Home"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="bookmark"
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon="bookmark"
                color={color}
                iconName="Bookmark"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon="add-circle"
                color={color}
                iconName="Create"
                focused={focused}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon="person-circle"
                color={color}
                iconName="Profile"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabLayout;

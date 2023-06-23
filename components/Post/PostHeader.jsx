import { View, Text } from "react-native";
import React from "react";
import { Avatar, Icon } from "@rneui/base";

export default function PostHeader() {
  return (
    <View className="flex flex-row">
      {/* Left component */}
      <View className="w-screen flex flex-row items-center justify-between p-2">

        <View className="flex flex-row items-center space-x-[6vh]">

        <Avatar
          size={50}
          rounded
          title="Rd"
          containerStyle={{ backgroundColor: "blue" }}
          source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
        />

        <View className="flex flex-col ml-[1vh]">
          <View className="flex flex-row items-center space-x-[2vh]">
            <Text className="font-bold">Rahul</Text>
            <Icon type="material" name="verified" color="gray"  size={20} />
            <Text className="text-xl">.</Text>
            <Text className="text-lg text-bold text-blue-600">Follow</Text>
          </View>

          <View className="flex flex-row items-center space-x-[2vh]">
            <Text className="text-xs">Grafic desiener</Text>
            <Text className="text-xl">.</Text>
            <Text className="text-xs">1 h</Text>
          </View>
        </View>
        </View>




        <View className="flex flex-row items-center space-x-[2vh]">
        <Icon type="material" name="bookmark" color="gray" size={30} />
            <Icon type="material" name="more-vert" color="gray" size={30} />
            </View>
      </View>
    </View>
  );
}

import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Avatar, Icon } from "@rneui/base";
import { useNavigation } from "expo-router/src/useNavigation";
import { Link, useRouter } from "expo-router";

export default function RightComponent() {
      // to open the drawer 
  const navigation = useNavigation();

      // to navigate to searsh
  const router = useRouter();

  return (
    <View  className="flex flex-row-reverse items-start  space-x-[10vh]">

         {/* Avatar and open drawer */}
      <TouchableOpacity className="mx-[2vh]" onPress={() => navigation.openDrawer()}>
        <Avatar 
          size={40}
          rounded
          title="Rd"
          containerStyle={{ backgroundColor: "blue" }}
          source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}

          />
      </TouchableOpacity>
   
        {/* Notifications */}
      <TouchableOpacity  >
        <Icon type="material" name="notifications-active" color="gray" size={35} />
      </TouchableOpacity>

        {/* Search */}
      <TouchableOpacity  >
      <Link href="/modal">

        <Icon type="material" name="search" color="gray" size={35} />
        </Link>
      </TouchableOpacity>

        {/* Timer */}

        <TouchableOpacity >
            <View  className="flex flex-col justify-center items-center   h-[6vh] w-[6vh] rounded-full  border-2  border-gray-300 ">
                <Text className="absolute top-1 p-0 text-lg" style={{color: 'gray'}}>34</Text>
                <Text className="absolute top-6 text-xs" style={{color: 'gray'}}> min </Text>
            </View>

        </TouchableOpacity>
    </View>
  );
}

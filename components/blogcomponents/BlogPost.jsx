import { View, Text, Image } from "react-native";
import React from "react";
import { Avatar, Card, Icon } from "@rneui/base";
import BlogPostHeader from "./BlogPostHeader";
import BlogFooter from "./BlogFooter";

export default function BlogPost() {
  return (
    <Card containerStyle={{
        borderRadius: 20,
        shadowColor: "#000",
        width: "80%",


    }}
    
    >
      <BlogPostHeader />

      <View className="flex flex-row justify-between my-[2vh]">

      <Text className="font-bold text-xl w-[25vh]">
        Why is the facebook and instgram app about to die
      </Text>
      <Image
        className="h-[10vh] w-[15vh] rounded-xl "
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
      </View>

      <BlogFooter />
    </Card>
  );
}

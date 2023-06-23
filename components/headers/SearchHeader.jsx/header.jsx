import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { Header } from "@rneui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "@rneui/base";
import { Navigator, useNavigation, useRouter } from "expo-router";

export default function SearchHeader() {
 const router =  useRouter()
  return (
    <Header
      placement="left"
      ViewComponent={LinearGradient} // Don't forget this!
      linearGradientProps={{
        colors: ["white", "white"],
        start: { x: 0, y: 0.5 },
        end: { x: 1, y: 0.5 },
      }}
      leftComponent={

        // back icon
        <TouchableOpacity  onPress={()=>{
          router.back()}} className="p-[1vh] rounded-full bg-gray-100">
        <Icon type="material" name="arrow-back" color="black" size={30} 
        />
        </TouchableOpacity>
       
      }
      centerComponent={

        // search input
        <TextInput   placeholder="Search Rawabit" className= "p-[2vh] w-[100%] h-[7vh] rounded-full  bg-gray-100  text-gray-500 text-xl "  />
      }
      rightComponent={
        // speack icon
        <TouchableOpacity  className="p-[1vh] rounded-full bg-gray-100">
        <Icon type="material" name="mic" color="black" size={30} 
        />
        </TouchableOpacity>
      }
    />
  );
}

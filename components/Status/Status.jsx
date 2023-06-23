import { View, Text } from 'react-native'
import React from 'react'
import { Avatar } from '@rneui/base'

export default function Status() {
  return (
    <View className="flex flex-col items-center m-1 ">
<Avatar 
    size={80}
    rounded
    title="Rd"
    containerStyle={{ backgroundColor: "blue" }}
    source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }}
/>
<Text className="text-center">Rahul</Text>
    </View>
  )
}
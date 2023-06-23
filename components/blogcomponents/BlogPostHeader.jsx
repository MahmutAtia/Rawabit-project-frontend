import { View, Text } from 'react-native'
import React from 'react'
import { Avatar, Icon } from '@rneui/base'

export default function BlogPostHeader() {
  return (
    <View className="w-screen flex flex-row items-center justify-start m-6r space-x-1 ">
    <Avatar  rounded size="md" source={{uri:"https://randomuser.me/api/portraits/men/36.jpg"}} />
    <Text > Omar Salman</Text>
    <Icon name="verified" type='material-icons-outlined' color="brown" size={15}  />
    <Text >in the expert group</Text>
    </View> 
  )
}
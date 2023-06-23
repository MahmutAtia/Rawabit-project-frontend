import { View, Text } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base'

export default function BlogFooter() {
  return (
    <View className="flex flex-row items-center justify-between">   

    <View className="flex flex-row items-center justify-between">
        <View className="flex flex-row items-center justify-between rounded-full p-1 bg-gray-200">
            <Text>May 26 .</Text>
            <Text>7 min Read</Text>
            <Icon type='material-icons-outlined' size={20} color="gray" name="star" />
            </View>
            <Text>  352K Views´</Text>
            </View>

    <View className="flex flex-row items-center justify-between">
    <Icon type='material-icons-outlined' name="bookmark" color="gray" />
    <Icon type='material-icons-outlined'  name="more" color="gray" />

    </View>
    </View>

  )
}
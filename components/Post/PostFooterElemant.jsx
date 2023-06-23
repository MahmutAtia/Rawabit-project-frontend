import { View, Text, Touchable } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base'
import { TouchableOpacity } from 'react-native'

export default function PostFooterElemant({ icon, num, text}) {
  return (
    <TouchableOpacity className="flex flex-col p-[1vh]">
      <Icon type="material-icons-outlined" name={icon} size={25} color="gray" />

      <View className="flex flex-row justify-between">
        <Text className=" text-gray-500">{num} </Text>
        <Text className=" text-gray-500">{text}</Text>
        </View>
    </TouchableOpacity>
  )
}
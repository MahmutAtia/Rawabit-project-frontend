import { View, Text } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base'

export default function BlogCategory({item}) {
    console.log(item)
  return (
    <View className="flex flex-row justify-center items-center rounded-full space-x-1 bg-white p-2  mt-2 mx-2 ">
        <Icon type='material-icons-outlined' name={item.icon} color="gray" />
      <Text>{item.text}</Text>
    </View>
  )
}
import { View, Text, Touchable } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function Searchhistory() {
  return (
    <TouchableOpacity className =" flex flex-row justify-between p-[2vh]">
     
     {/* last icon */}
     <Icon type='matrial' name='history' size={30} color="gray"/>

      <Text className="flex-1 px-[5vh] text-lg text-black">Rawbit last Search</Text>    

      {/* arrow up */}
     <Icon type='matrial' name="north-west" size={30}/>
    </TouchableOpacity>
  )
}
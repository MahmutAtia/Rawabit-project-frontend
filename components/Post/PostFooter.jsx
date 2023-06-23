import { View, Text } from 'react-native'
import React from 'react'
import PostFooterElemant from './PostFooterElemant'

export default function PostFooter() {
  return (
    <View className="flex flex-row justify-between ">


        <PostFooterElemant icon="chat" num="1.5k" text="Comment" />
        <PostFooterElemant icon="send" num="1.5k" text="Send" />
        <PostFooterElemant icon="thumb-up-off-alt" num="1.5k" text="Like" />
        <PostFooterElemant icon="military-tech" num="1.5k" text="Appreciate" />
    
    </View>
        
  )
}
import { View, Text } from 'react-native'
import React from 'react'
import { Header } from '@rneui/themed';
import { LinearGradient } from 'expo-linear-gradient';

export default function AppHeader() {
  return (
<Header
  ViewComponent={LinearGradient} // Don't forget this!
  linearGradientProps={{
    colors: ['red', 'pink'],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  }}
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}

/>    
  )
}
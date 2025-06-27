import { View, Text } from 'react-native'
import React from 'react'
import Header from '@/components/Header'
import COLORS from '@/constants/colors'
const Settings = () => {
  return (
    <View style={{backgroundColor:COLORS.background, minHeight:'100%'}}>
      <Header/>
      <View>
      <Text>Match Your Style</Text>
      </View>
    </View>
  )
}
export default Settings
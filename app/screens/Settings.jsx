import { View, Text } from 'react-native'
import React from 'react'
import Header from '@/components/Header'
import COLORS from '@/constants/colors'
const Settings = () => {
  return (
    <View style={{backgroundColor:COLORS.background, flex:1}}>
      <Header/>
      <View>
      <Text>Match Your Styles</Text>
      </View>
    </View>
  )
}
export default Settings
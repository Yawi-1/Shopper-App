import { View, Text } from 'react-native'
import React from 'react'
import Header from '@/components/Header'
import COLORS from '@/constants/colors'
import BackButton from '@/components/BackButton'
const Settings = ({navigation}) => {
  return (
    <View style={{backgroundColor:COLORS.background, flex:1}}>
      <BackButton navigation={navigation} name="Settings" />
      <View>
      <Text>Match Your Styles</Text>
      </View>
    </View>
  )
}
export default Settings
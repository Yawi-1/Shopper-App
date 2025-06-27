import { View, Text } from 'react-native'
import React from 'react'
import Header from '@/components/Header'
import COLORS from '@/constants/colors'
const Profile = () => {
  return (
    <View style={{backgroundColor:COLORS.background, minHeight:'100%'}}>
      <Header/>
      <View>
      <Text>Profile</Text>
      </View>
    </View>
  )
}

export default Profile
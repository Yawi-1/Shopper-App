import { View, Text } from 'react-native'
import React from 'react'
import Header from '@/components/Header'
import COLORS from '@/constants/colors'
const Cart = () => {
  return (
    <View style={{backgroundColor:COLORS.background, minHeight:'100%'}}>
      <Header/>
      <View>
      <Text>Cart</Text>
      </View>
    </View>
  )
}

export default Cart
import { View, Text } from 'react-native'
import React from 'react'
import BackButton from '@/components/BackButton'
const Wishlist = ({ navigation }) => {
    return (
        <View>
            <BackButton navigation={navigation} name={'Wishlist'} />
            <Text>Wishlist</Text>
        </View>
    )
}

export default Wishlist
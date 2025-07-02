import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const RatingStars = ({ rating }) => {
    return (
        <View style={{ flexDirection: 'row', margin: 20, gap: 10 }}>
            {
                Array(5).fill(null).map((_, index) => (
                    <Ionicons key={index} name={`${rating > index ? 'star' : 'star-outline'}`} size={20} color="gold" />
                ))
            }
        </View>
    )
}

export default RatingStars
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Checkout from './screens/Checkout';
import ProductDetail from './screens/ProductDetail';
const HomeStack = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen name="Checkout" component={Checkout} options={{ headerShown: false }} />
            <Stack.Screen name="Detail" component={ProductDetail} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default HomeStack
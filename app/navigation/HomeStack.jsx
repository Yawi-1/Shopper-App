import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Addresses from '../screens/Addresses';
import Orders from '../screens/Orders';
import Profile from '../screens/Profile';
const HomeStack = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            <Stack.Screen name="Addresses" component={Addresses} options={{ headerShown: false }} />
            {/* <Stack.Screen name="Orders" component={Orders} options={{ headerShown: false }} /> */}
        </Stack.Navigator>
    )
}

export default HomeStack
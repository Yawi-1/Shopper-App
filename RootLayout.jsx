import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStack from './app/HomeStack'
import Settings from './app/screens/Settings'
import Cart from './app/screens/Cart'
import Profile from './app/screens/Profile'
import { Ionicons } from '@expo/vector-icons';
import COLORS from './constants/colors'
const RootLayout = () => {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={({route})=>({
        headerShown: false,
        tabBarActiveTintColor: COLORS.textPrimary,
        tabBarInactiveTintColor: COLORS.textSecondary,
        tabBarIcon:({focused,size})=>{
          let iconName;
          if(route.name === 'Home'){
            iconName = focused? 'home' : 'home-outline'
          }else if(route.name === 'Settings'){
            iconName = focused? 'settings' :'settings-outline'
          }else if(route.name === 'Cart'){
            iconName = focused? 'cart' : 'cart-outline'
          } else if(route.name === 'Profile'){
            iconName = focused? 'person' : 'person-outline'
          }
          return <Ionicons name={iconName} color={COLORS.primary} size={24}/>

        }
        
    })}>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Settings" component={Settings} />
        <Tab.Screen name="Cart" component={Cart} />
        <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  )
}

export default RootLayout
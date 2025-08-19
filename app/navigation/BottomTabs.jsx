import { useAuth } from '@/context/AuthContext';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import COLORS from '../../constants/colors';
import Admin from '../screens/Admin/Dashboard';
import Cart from '../screens/Cart';
import Home from '../screens/Home';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const {isAdmin} = useAuth();
 
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.textPrimary,
        tabBarInactiveTintColor: COLORS.textSecondary,
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Admin') {
            iconName = focused ? 'person-add' : 'person-add-outline';
          }
          return <Ionicons name={iconName} color={COLORS.primary} size={24} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Profile" component={Profile} />
      {isAdmin && <Tab.Screen name="Admin" component={Admin} />}
    </Tab.Navigator>
  );
};

export default BottomTabs;

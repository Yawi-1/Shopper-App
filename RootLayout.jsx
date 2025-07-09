import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './app/navigation/BottomTabs';
import Checkout from './app/screens/Checkout';
import ProductDetail from './app/screens/ProductDetail';
import Orders from './app/screens/Orders';
import Addresses from './app/screens/Addresses';
import Wishlist from './app/screens/Wishlist';
import Home from './app/screens/Home';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// 📦 Stack for global navigation like Detail, Checkout, etc.
const MainStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="MainApp" component={BottomTabs} />
    <Stack.Screen name="Wishlist" component={Wishlist} />
    <Stack.Screen name="Checkout" component={Checkout} />
    <Stack.Screen name="Detail" component={ProductDetail} />
    <Stack.Screen name="Orders" component={Orders} />
    <Stack.Screen name="Address" component={Addresses} />
  </Stack.Navigator>
);

// 🧭 Drawer wraps MainStack
const RootLayout = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#f5f5f5', // drawer background
          width: 250,
        },
        drawerLabelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
        },
        drawerActiveTintColor: '#2196F3', // color for active item
        drawerInactiveTintColor: '#333',  // color for inactive items
        drawerItemStyle: {
          marginVertical: 5,
          borderRadius: 10,
        },
      }}
    >
      <Drawer.Screen name="Home" component={MainStack} />
      <Drawer.Screen name="Orders" component={Orders} />
      <Drawer.Screen name="Wishlist" component={Wishlist} />
    </Drawer.Navigator>
  );
};

export default RootLayout;

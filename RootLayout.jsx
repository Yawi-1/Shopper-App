import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import BottomTabs from './app/navigation/BottomTabs';
import Checkout from './app/screens/Checkout';
import Orders from './app/screens/Orders';
import ProductDetail from './app/screens/ProductDetail';
import Settings from './app/screens/Settings';
import Wishlist from './app/screens/Wishlist';

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
  </Stack.Navigator>
);

// 🧭 Drawer wraps MainStack
const RootLayout = () => {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Drawer.Screen name="Home" component={MainStack} />
      <Drawer.Screen name="Orders" component={Orders} />
      <Drawer.Screen name="Wishlist" component={Wishlist} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

export default RootLayout;

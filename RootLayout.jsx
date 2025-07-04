import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './app/navigation/BottomTabs';
import Checkout from './app/screens/Checkout';
import ProductDetail from './app/screens/ProductDetail';
import Orders from './app/screens/Orders';
import Addresses from './app/screens/Addresses';
import Wishlist from './app/screens/Wishlist';
const Stack = createNativeStackNavigator();

const RootLayout = () => {
  return (

    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Main tabbed app */}
      <Stack.Screen name="MainApp" component={BottomTabs} />

      {/* Global stack screens */}
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="Detail" component={ProductDetail} />
      <Stack.Screen name='Orders' component={Orders} />
      <Stack.Screen name='Address' component={Addresses}/>
      <Stack.Screen name='Wishlist' component={Wishlist}/>
    </Stack.Navigator>

  );
};

export default RootLayout;

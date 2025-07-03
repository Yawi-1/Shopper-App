import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './app/BottomTabs'
import Checkout from './app/screens/Checkout';
import ProductDetail from './app/screens/ProductDetail';

const Stack = createNativeStackNavigator();

const RootLayout = () => {
  return (

    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* Main tabbed app */}
      <Stack.Screen name="MainApp" component={BottomTabs} />

      {/* Global stack screens */}
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="Detail" component={ProductDetail} />
    </Stack.Navigator>

  );
};

export default RootLayout;

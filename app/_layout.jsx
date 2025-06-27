import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {ProductProvider} from '../context/ProductContext'
export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <ProductProvider>
      <Stack screenOptions={{ headerShown: false }} />
      </ProductProvider>
    </SafeAreaProvider>
  );
}

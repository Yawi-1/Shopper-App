import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ProductProvider } from '../context/ProductContext'
import { AuthProvider } from '../context/AuthContext';
export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <ProductProvider>
        <AuthProvider>
          <Stack screenOptions={{ headerShown: false }} />
        </AuthProvider>
      </ProductProvider>
    </SafeAreaProvider>
  );
}

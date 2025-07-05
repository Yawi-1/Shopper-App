import RootLayout from '../RootLayout'
import SafeScreen from '@/components/SafeScreen';
import AuthStack from './navigation/AuthStack';
import { useState } from 'react';
export default function Index() {
  const [isLogin, setLogin] = useState(false);
  return (
    <SafeScreen >
      {
        !isLogin ? <RootLayout /> : <AuthStack />
      }
    </SafeScreen>
  );
}

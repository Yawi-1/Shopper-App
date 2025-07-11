import RootLayout from '../RootLayout'
import SafeScreen from '@/components/SafeScreen';
import AuthStack from './navigation/AuthStack';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
export default function Index() {
  const { state } = useAuth();
  const isLogin = state?.token;
  return (
    <SafeScreen >
      {
        isLogin ? <RootLayout /> : <AuthStack />
      }
    </SafeScreen>
  );
}

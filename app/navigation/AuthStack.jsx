import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Auth/Login'
import Register from '../screens/Auth/Register'

const AuthStack = () => {
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_left' // 
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  )
}

export default AuthStack

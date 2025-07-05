import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  ScrollView
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import COLORS from '@/constants/colors'

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1, backgroundColor: COLORS.background }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.heading}>Log in 🌟</Text>
        <Text style={styles.subHeading}>Welcome back! Please enter your details.</Text>

        <View style={styles.inputBox}>
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputWrapper}>
            <Ionicons name="mail-outline" size={20} color="gray" style={styles.icon} />
            <TextInput
              placeholder="Enter email"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <Text style={styles.label}>Password</Text>
          <View style={styles.inputWrapper}>
            <Ionicons name="lock-closed-outline" size={20} color="gray" style={styles.icon} />
            <TextInput
              placeholder="Enter password"
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
        </View>

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.signupLink}>
            Don’t have an account? <Text style={{ color: COLORS.primary }}>Sign Up</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
    flexGrow: 1
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    paddingVertical: 10,
    marginTop: 30
  },
  subHeading: {
    fontSize: 18,
    color: 'gray',
    paddingBottom: 10
  },
  inputBox: {
    marginTop: 20,
    marginBottom: 20
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: '500'
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10
  },
  icon: {
    marginRight: 5
  },
  input: {
    flex: 1,
    height: 40
  },
  loginBtn: {
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },
  signupLink: {
    textAlign: 'center',
    color: 'gray'
  }
})

export default Login

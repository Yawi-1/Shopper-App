import Header from '@/components/Header';
import COLORS from '@/constants/colors';
import { useAuth } from '@/context/AuthContext';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Profile = ({ navigation }) => {
  const {handleLogout} = useAuth();
  return (
    <View style={styles.container}>
      <Header />

      <Text style={styles.title}>My Account</Text>

      <View style={styles.section}>
        <ProfileOption
          title="Orders"
          onPress={() => navigation.navigate('Orders')}
        />
        <ProfileOption
          title="Wishlist"
          onPress={() => navigation.navigate('Wishlist')}
        />
      </View>

      <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
        <Ionicons name='log-out' color={'white'} size={24}/>
      </TouchableOpacity>
    </View>
  );
};

const ProfileOption = ({ title, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>{title}</Text>
        <Ionicons name="arrow-forward" size={20} color={COLORS.primary}  />
      </View>
    </Pressable>

  );
};

export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 20,
    color: COLORS.primary,
  },
  section: {
    paddingHorizontal: 20,
    gap: 16,
  },
  optionContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.primary,
    padding: 14,
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2, // subtle shadow on Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, // for iOS shadow
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  optionText: {
    fontSize: 18,
    fontWeight: '500',
    color: COLORS.textDark || '#333',
  },
  logoutBtn:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    gap:'10',
    paddingVertical:10,
    paddingHorizontal:20,
    backgroundColor:'red',
    position:'absolute',
    bottom:20,
    left:10,
    width:'95%',
    borderRadius:25
  },
  logoutText:{
    color:'#fff',
    fontSize:16,
    fontWeight:600
  }
});

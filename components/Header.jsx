import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import COLORS from '@/constants/colors'; // adjust as needed
import { useNavigation } from 'expo-router';

const Header = ({ title = 'Shopper' }) => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Ionicons
          name="menu"
          size={26}
          color={COLORS.primary}
          style={styles.icon}
        />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>

      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa?w=600&auto=format&fit=crop&q=60',
        }}
        style={styles.avatar}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 20,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  icon: {
    backgroundColor: '#fff',
    padding: 6,
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
});

import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import COLORS from '@/constants/colors';

const BackButton = ({ navigation, name }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
      }}
    >
      <Ionicons name="arrow-back" size={24} color={COLORS.textSecondary} />
      <Text style={{ marginLeft: 8, fontSize: 18, color: COLORS.textSecondary}}>
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default BackButton;

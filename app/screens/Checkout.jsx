import { View, Text } from 'react-native';
import React from 'react';
import COLORS from '@/constants/colors';
import BackButton from '@/components/BackButton';

const Checkout = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.background }}>
      <BackButton navigation={navigation} name={'Checkout'}/>
    </View>
  );
};

export default Checkout;

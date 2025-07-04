import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from 'react-native';
import React from 'react';
import COLORS from '@/constants/colors';
import BackButton from '@/components/BackButton';

const Checkout = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 40}
    >
        <BackButton navigation={navigation} name={'Checkout'} />
      <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
        <Text style={styles.sectionTitle}>Shipping Address</Text>

        <Text style={styles.label}>Full Name</Text>
        <TextInput
          placeholder="Enter your full name"
          placeholderTextColor={COLORS.primary}
          style={styles.input}
        />

        <Text style={styles.label}>Address</Text>
        <TextInput
          placeholder="Enter your address"
          placeholderTextColor={COLORS.primary}
          style={styles.input}
        />

        <Text style={styles.label}>City</Text>
        <TextInput
          placeholder="Enter your city"
          placeholderTextColor={COLORS.primary}
          style={styles.input}
        />

        <View style={styles.row}>
          <View style={{ flex: 1, marginRight: 8 }}>
            <Text style={styles.label}>State</Text>
            <TextInput
              placeholder="Select state"
              placeholderTextColor={COLORS.primary}
              style={styles.input}
            />
          </View>
          <View style={{ flex: 1, marginLeft: 8 }}>
            <Text style={styles.label}>Zip Code</Text>
            <TextInput
              placeholder="Enter zip code"
              placeholderTextColor={COLORS.primary}
              style={styles.input}
              keyboardType="numeric"
            />
          </View>
        </View>

        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          placeholder="Enter your phone number"
          placeholderTextColor={COLORS.primary}
          style={styles.input}
          keyboardType="phone-pad"
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Continue to Payment</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
  },
  label: {
    fontSize: 15,
    fontWeight: '400',
    marginBottom: 6,
    marginTop: 14,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    padding: 12,
    fontSize: 15,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    padding: 15,
    marginTop: 30,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

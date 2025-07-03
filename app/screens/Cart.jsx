import { View, Text, FlatList, StyleSheet, TouchableHighlight } from 'react-native';
import React from 'react';
import Header from '@/components/Header';
import COLORS from '@/constants/colors';
import { useProducts } from '@/context/ProductContext';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRouter } from 'expo-router';

const Cart = () => {
  const { products = [] } = useProducts();
  const navigation = useNavigation();
  const router = useRouter();

  const cartCard = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>${item.price}</Text>
        <View style={styles.row}>
          <Text style={styles.colorCircle}></Text>
          <Text>L</Text>
          <Ionicons name="trash-outline" color={COLORS.primary} size={20} />
        </View>
      </View>
    </View>
  );

  const renderFooter = () => (
    <View style={styles.summary}>
      <View style={styles.summaryRow}>
        <Text style={styles.summaryLabel}>Total:</Text>
        <Text style={styles.summaryValue}>$119.27</Text>
      </View>
      <View style={styles.summaryRow}>
        <Text style={styles.summaryLabel}>Shipping:</Text>
        <Text style={styles.summaryValue}>$20.00</Text>
      </View>
      <Text style={styles.hr}></Text>
      <View style={styles.summaryRow}>
        <Text style={styles.summaryLabel}>Grand Total:</Text>
        <Text style={styles.summaryValue}>$139.27</Text>
      </View>

      <TouchableHighlight onPress={()=>navigation.navigate('Checkout')}>
        <Text style={styles.checkoutText}>Checkout</Text>
      </TouchableHighlight>

    </View>
  );

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.heading}>My Cart</Text>
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={cartCard}
        ListEmptyComponent={
          <View style={styles.emptyCart}>
            <Text style={styles.emptyText}>Your cart is empty.</Text>
          </View>
        }
        ListFooterComponent={ renderFooter  }
        contentContainerStyle={{ paddingBottom: 10 }}
      />
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    minHeight: '100%',
    flex: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primary,
    textAlign: 'center',
    marginVertical: 16,
  },
  card: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderRadius: 16,
    margin:  10,
    flexDirection: 'row',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  cardContent: {
    gap: 10,
    marginLeft: 16,
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    width: '70%',
  },
  price: {
    fontSize: 12,
    color: COLORS.textSecondary,
  },
  row: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  colorCircle: {
    backgroundColor: 'dodgerblue',
    width: 24,
    height: 24,
    borderRadius: 50,
  },
  emptyCart: {
    padding: 16,
    backgroundColor: 'white',
    marginBottom: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  checkoutText: {
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 10,
    width: '100%',
    textAlign: 'center',
    marginTop: 16,
    color:'white',
    fontWeight:600,
    fontSize:16
  },

  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textSecondary,
  },
  summary: {
    backgroundColor: 'white',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    gap: 12,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  summaryLabel: {
    fontSize: 16,
    fontWeight: '600',
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.primary,
  },
  hr:{
    borderBottomColor: COLORS.border,
    borderBottomWidth: 1,
  }
});

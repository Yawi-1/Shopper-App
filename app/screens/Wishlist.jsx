import BackButton from '@/components/BackButton';
import COLORS from '@/constants/colors';
import { useProducts } from '@/context/ProductContext';
import { Image } from 'expo-image';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Wishlist = ({ navigation }) => {
  const { wishlist, loading, removeFromWishlist } = useProducts();
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <TouchableOpacity
          style={styles.removeBtn}
          onPress={() => removeFromWishlist(item.id)}
        >
          <Text style={styles.removeText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <BackButton navigation={navigation} name={'Wishlist'} />

      {loading ? (
        <Text style={styles.loading}>Loading...</Text>
      ) : wishlist.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Image
            style={styles.emptyImage}
            source={require('../../assets/images/wishlist.svg')} // Use a PNG or JPG, SVGs not directly supported in RN
          />
          <Text style={styles.emptyText}>Your wishlist is empty</Text>
        </View>
      ) : (
        <FlatList
          data={wishlist}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
};

export default Wishlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  loading: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 18,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    elevation: 2,
    borderRadius: 10,
    marginVertical: 8,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  info: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  removeBtn: {
    marginTop: 8,
    backgroundColor: '#ff4444',
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  removeText: {
    color: '#fff',
    fontWeight: '600',
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:90
  },
  emptyImage: {
    width: 260,
    height: 260,
    marginBottom: 20,
  },
  emptyText: {
    fontSize: 22,
    marginTop:32,
    color:COLORS.primary,
    fontWeight:'bold'
  },
});

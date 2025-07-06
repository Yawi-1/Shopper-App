import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import COLORS from '@/constants/colors';
import { useProducts } from '@/context/ProductContext';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';

const Home = () => {
  const navigation = useNavigation();
  const { products, loading,addToWishList} = useProducts();

  const categories = ['all', ...new Set(products.map(item => item.category))];
  const [allProducts, setAllProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    setAllProducts(products);
  }, [products]);

  // Filter products based on category and search text
  const filteredProducts = allProducts
    .filter(item => selectedCategory === 'all' || item.category === selectedCategory)

  // Suggestions for search
  const suggestions = allProducts
    .filter(item =>
      item.title.toLowerCase().includes(inputText.toLowerCase()) && inputText.trim() !== ''
    )
    .slice(0, 5); // show only top 5 suggestions

  const Cards = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Detail', { product: item })}
      style={styles.card}
    >
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
        {item.title}
      </Text>
      <Text style={styles.price}>$ {item.price}</Text>
      <TouchableOpacity onPress={() => addToWishList(item)} style={styles.liked}>
        <Ionicons name="heart-outline" size={24} color="red" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={{ backgroundColor: COLORS.background, flex: 1 }}>
      <Header />


      {/* Product Grid */}
      {loading ? (
        <ActivityIndicator size="large" color={COLORS.primary} style={{ marginTop: 20 }} />
      ) : (
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={Cards}
          contentContainerStyle={{
            padding: 16,
            backgroundColor: COLORS.background,
            flexGrow: 1,
          }}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          ListHeaderComponent={
            <>
              <View style={{ paddingBottom: 20 }}>
                <Text style={styles.heading}>Match Your Style</Text>
                <TextInput
                  value={inputText}
                  onChangeText={setInputText}
                  style={styles.searchInput}
                  placeholder="Search"
                />
                {/* Suggestions dropdown */}
                {inputText !== '' && suggestions.length > 0 && (
                  <View style={styles.suggestionContainer}>
                    {suggestions.map((item) => (
                      <TouchableOpacity
                        key={item.id}
                        onPress={() => { navigation.navigate('Detail', { product: item }), setInputText('') }}
                        style={styles.suggestionItem}
                      >
                        <Text style={styles.suggestionText}>{item.title}</Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
                {inputText !== '' && suggestions.length === 0 && (
                  <View style={styles.suggestionContainer}>
                    <TouchableOpacity
                      onPress={() => { setInputText('') }}
                      style={styles.suggestionItem}
                    >
                      <Text style={styles.suggestionText}>Not found</Text>
                    </TouchableOpacity>
                  </View>
                )}

                {/* Category scroll list */}
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {categories.map((name, index) => (
                    <TouchableOpacity
                      onPress={() => setSelectedCategory(name)}
                      key={index}
                      style={[
                        styles.categories,
                        selectedCategory === name && { backgroundColor: COLORS.primary },
                      ]}
                    >
                      <Text style={styles.btntext}>{name}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>

              <Text
                style={{
                  textAlign: 'center',
                  marginHorizontal: 15,
                  fontSize: 32,
                  fontWeight: '600',
                  color: COLORS.primary,
                }}
              >
                Top Featured
              </Text>
              <Text style={styles.hr}></Text>

            </>
          }
          ListEmptyComponent={
            <Text style={styles.emptyText}>No products available.</Text>
          }
        />
      )}
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingHorizontal: 22,
  },
  searchInput: {
    borderWidth: 1,
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    paddingHorizontal: 26,
    backgroundColor: 'white',
    height: 50,
    marginBottom: 10,
  },
  suggestionContainer: {
    backgroundColor: 'white',
    width: '90%',
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    maxHeight: 220,
    zIndex: 999,
    elevation: 4,
    marginBottom: 15,
  },
  suggestionItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  suggestionText: {
    fontSize: 14,
    color: '#333',
  },
  categories: {
    backgroundColor: 'gray',
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 10,
    borderRadius: 10,
  },
  btntext: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  card: {
    width: '48%',
    height: 260,
    padding: 12,
    marginBottom: 16,
    borderRadius: 15,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: COLORS.background,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardImage: {
    width: '100%',
    height: 140,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    fontSize: 13,
    fontWeight: '600',
    textAlign: 'center',
    paddingHorizontal: 4,
  },
  price: {
    paddingTop: 4,
    textAlign: 'center',
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 18,
    color: '#999',
  },
  hr: {
    borderBottomColor: COLORS.primary,
    borderBottomWidth: 1,
    marginBottom: 10,
    width: '50%',
    alignSelf: 'center',
  },
  liked: {
    position: 'absolute',
    top: 8,
    right: 8,
    padding: 5,
  },
});

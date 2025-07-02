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

  const { products, loading } = useProducts();
   const categories = ['all', ...new Set(products.map(item => item.category))]
  const [allProducts, setAllProducts] = useState([]);
  const [selectedCategory,setSelectedCategory] = useState('all')

  useEffect(() => {
    setAllProducts(products);
  }, [products]);

  const filteredProducts = selectedCategory === 'all'
  ? allProducts
  : allProducts.filter(item => item.category === selectedCategory);


  const Cards = ({ item }) => (
    <TouchableOpacity onPress={()=>navigation.navigate('Detail',{product:item})} style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
        {item.title}
      </Text>
      <Text style={styles.price}>$ {item.price}</Text>
      <TouchableOpacity onPress={()=>alert('Hello')}  style={styles.liked}>
        <Ionicons name="heart-outline" size={24} color="red" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={{ backgroundColor: COLORS.background, flex: 1 }}>
      <Header />
      <View style={{ paddingBottom: 20 }}>
        <Text style={styles.heading}>Match Your Style</Text>
        <TextInput style={styles.searchInput} placeholder="Search" />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((name, index) => (
            <TouchableOpacity onPress={()=>setSelectedCategory(name)} key={index} style={[styles.categories,selectedCategory === name && {backgroundColor:COLORS.primary}]}>
              <Text style={styles.btntext}>{name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

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
            backgroundColor: '#fff',
            flexGrow: 1,
          }}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          ListHeaderComponent={
            <>
              <Text style={{textAlign:'center',marginHorizontal:15,fontSize:32,fontWeight:'600',color:COLORS.primary}}>Top Featured </Text>
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
    // borderColor: COLORS.primary,
     marginBottom: 20,
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    paddingHorizontal: 26,
    backgroundColor: 'white',
    height: 50,
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
    textTransform:'capitalize'
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
    marginBottom:10,
    width:'50%',
    margin:'auto'
  },
  liked:{
    position:'absolute',
    top:8,
    right:8,
    padding:5,
    color:'white'
  }
});

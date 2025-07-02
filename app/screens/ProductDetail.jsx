import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import React, { useState } from 'react';
import Header from '@/components/Header';
import { Image } from 'expo-image';
import COLORS from '@/constants/colors';
import * as Animatable from 'react-native-animatable';
import RatingStars from '@/components/RatingStars';

const ProductDetail = ({ route, navigation }) => {
  const { product } = route.params;
  const sizes = ['S', 'M', 'L', 'XL'];
  const colors = ['black', 'white', 'gray', 'pink', 'dodgerblue', 'limegreen'];

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={{padding:12}}>
        {/* Animated Product Image */}
        <Animatable.View animation="fadeInUp" duration={800} delay={100}>
          <Image
            source={{ uri: product.image }}
            style={styles.productImage}
            contentFit="cover"
          />
        </Animatable.View>

        {/* Animated Title and Price */}
        <Animatable.View animation="fadeInUp" duration={800} delay={200}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.price}>${product.price}</Text>
          </View>
        </Animatable.View>
        <Animatable.View animation="fadeInUp" duration={800} delay={200}>
          <Text style={{ padding: 12, color: 'gray' }}>{product.description}</Text>
        </Animatable.View>

        {/* Animated Size Options */}
        <Animatable.View animation="fadeInUp" duration={800} delay={300}>
          <Text style={styles.sectionLabel}>Size</Text>
          <View style={styles.optionsRow}>
            {sizes.map((size, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.sizeCircle,
                  selectedSize === size && styles.selectedOption,
                ]}
                onPress={() => setSelectedSize(size)}
              >
                <Text style={styles.optionText}>{size}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Animatable.View>

        {/* Animated Color Options */}
        <Animatable.View animation="fadeInUp" duration={800} delay={400}>
          <Text style={styles.sectionLabel}>Colors</Text>
          <View style={styles.optionsRow}>
            {colors.map((color, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.colorCircle,
                  { backgroundColor: color },
                  selectedColor === color && styles.selectedBorder,
                ]}
                onPress={() => setSelectedColor(color)}
              />
            ))}
          </View>
        </Animatable.View>
        <RatingStars rating={3}/>

        {/* Animated Add to Cart Button */}
        <Animatable.View animation="fadeInUp" duration={800} delay={500}>
          <TouchableOpacity
            onPress={() => alert('Item added to cart')}
            style={styles.addToCartBtn}
          >
            <Text style={styles.cartText}>Add to Cart</Text>
          </TouchableOpacity>
        </Animatable.View>
      </ScrollView>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  productImage: {
    width: '100%',
    height: 350,
    borderRadius: 5,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 10,
  },
  title: {
    width: '60%',
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: COLORS.primary,
  },
  sectionLabel: {
    marginHorizontal: 15,
    marginVertical: 10,
    fontSize: 18,
    letterSpacing: 2,
    fontWeight: '600',
  },
  optionsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginHorizontal: 20,
    marginBottom: 15,
  },
  sizeCircle: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: COLORS.inputBackground,
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorCircle: {
    height: 40,
    width: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  selectedOption: {
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  selectedBorder: {
    borderColor: COLORS.primary,
    borderWidth: 2,
  },
  optionText: {
    fontWeight: '600',
  },
  addToCartBtn: {
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 24,
    alignItems: 'center',
    marginBottom: 20,
  },
  cartText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 18,
  },
});

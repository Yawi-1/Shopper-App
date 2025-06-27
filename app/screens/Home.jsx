import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '@/components/Header'
import COLORS from '@/constants/colors'
const Home = () => {
  const categories = ['Men', 'Women', 'Kids', 'Electronics', 'Home & Garden', 'Beauty & Fashion', 'Sports & Outdoors', 'Travel',]
  return (
    <View style={{ backgroundColor: COLORS.background, minHeight: '100%' }}>
      <Header />
      <View>
        <Text style={styles.heading}>Match Your Style</Text>
        <TextInput style={styles.searchInput} placeholder='Search' />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {
            categories.map((name, index) => {
              return (
                <TouchableOpacity style={styles.categories}>
                  <Text style={styles.btntext}>{name}</Text>
                </TouchableOpacity>
              )
            })
        }

        </ScrollView>
      </View>
    </View>
  )
}

export default Home
const styles = StyleSheet.create({
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingHorizontal: 22,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    marginBottom: 20,
    borderRadius: 10,
    width: '90%',
    alignSelf: 'center',
    paddingHorizontal: 26,
    backgroundColor: 'white',
    height: 50,
  },
  categories: {
    backgroundColor: COLORS.primary,
    paddingVertical: 10,
    paddingHorizontal:20,
    margin: 10,
    borderRadius: 10
  },btntext:{
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
})
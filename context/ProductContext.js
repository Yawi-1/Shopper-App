import { createContext, useContext, useEffect, useState, useCallback } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔁 Fetch products from API
  const fetchProducts = useCallback(async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  // 📥 Load wishlist from AsyncStorage
  const getWishlist = useCallback(async () => {
    try {
      const data = await AsyncStorage.getItem('wishlist');
      const parsed = data ? JSON.parse(data) : [];
      setWishlist(parsed);
    } catch (error) {
      console.error("Error fetching wishlist:", error);
    }
  }, []);

  // ➕ Add to wishlist
  const addToWishList = useCallback(async (product) => {
    try {
      const isAlreadyExist = wishlist.some(item => item.id === product.id);
      if (isAlreadyExist) {
        alert('Item already in wishlist.');
        return;
      }

      const updatedWishlist = [...wishlist, product];
      await AsyncStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
      setWishlist(updatedWishlist);
      alert('Product added to wishlist');
    } catch (error) {
      console.error("Error adding to wishlist:", error);
    }
  }, [wishlist]);

  // Add to cart
  const addToCart = async () => {
    try {
           alert('Item added to cart')
    } catch (error) {

    }
  }

  // 📦 Load everything on mount
  useEffect(() => {
    fetchProducts();
    getWishlist();
  }, [fetchProducts, getWishlist]);

  return (
    <ProductContext.Provider
      value={{
        products,
        cart,
        wishlist,
        loading,
        setCart,
        addToWishList,
        addToCart
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);

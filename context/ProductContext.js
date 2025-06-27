import { createContext, useContext, useEffect, useState } from "react";
const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [total, setTotal] = useState(0);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState('asc');
    const fetchProducts = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchProducts();
    }, []);


    return(
        <ProductContext.Provider value={{
            products,
            setProducts,
            cart,
            setCart,
            loading,
            setLoading,
            error,
            setError,
            total,
            setTotal,
            searchTerm,
            setSearchTerm,
            sortOrder,
            setSortOrder
        }}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProducts = () => useContext(ProductContext);
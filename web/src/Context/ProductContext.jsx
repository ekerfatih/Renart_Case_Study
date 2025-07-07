import {createContext, useContext, useEffect, useState} from "react";
import axios from "axios";

const ProductContext = createContext();

const ProductContextProvider = ({children}) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchProducts = async () => {
        try {
            // const response = await axios.get("http://192.168.1.150:8080/api/products");
            const response = await axios.get("https://renart-case-study.onrender.com/api/products");
            setData(response.data.products);
            setLoading(false);
        } catch (err) {
            console.error(err);
        }
    };


    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <ProductContext.Provider value={{data, loading}}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;
export const useProductContext = () => useContext(ProductContext);
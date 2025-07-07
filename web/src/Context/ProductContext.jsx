import {createContext, useContext, useEffect, useState} from "react";
import axios from "axios";

const ProductContext = createContext();

const ProductContextProvider = ({children}) => {

    const [data, setData] = useState(products);

    const fetchProducts = async () => {
        try {
            const response = await axios.get("https://renart-case-study.onrender.com/api/products");
            setData(response.data.products);
        } catch (err) {
            console.error(err);
        }
    };


    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <ProductContext.Provider value={data}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;
export const useProductContext = () => useContext(ProductContext);
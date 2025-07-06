import {createContext, useContext, useEffect, useState} from "react";
import axios from "axios";

const ProductContext = createContext();

const products =  [
    {
        "id": 1,
        "name": "Engagement Ring 1",
        "popularityScore": 0.3,
        "weight": 2.1,
        "images": {
            "yellow": "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG085-100P-Y.jpg?v=1696588368",
            "rose": "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG085-100P-R.jpg?v=1696588406",
            "white": "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG085-100P-W.jpg?v=1696588402"
        },
        "price": 292.915126774509
    },
    {
        "id": 2,
        "name": "Engagement Ring 2",
        "popularityScore": 0.51,
        "weight": 3.4,
        "images": {
            "yellow": "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG012-Y.jpg?v=1707727068",
            "rose": "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG012-R.jpg?v=1707727068",
            "white": "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG012-W.jpg?v=1707727068"
        },
        "price": 550.852110205249
    },
    {
        "id": 3,
        "name": "Engagement Ring 3",
        "popularityScore": 0.92,
        "weight": 3.8,
        "images": {
            "yellow": "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG020-100P-Y.jpg?v=1683534032",
            "rose": "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG020-100P-R.jpg?v=1683534032",
            "white": "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG020-100P-W.jpg?v=1683534032"
        },
        "price": 782.823723423743
    },
    {
        "id": 4,
        "name": "Engagement Ring 4",
        "popularityScore": 0.88,
        "weight": 4.5,
        "images": {
            "yellow": "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG022-100P-Y.jpg?v=1683532153",
            "rose": "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG022-100P-R.jpg?v=1683532153",
            "white": "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG022-100P-W.jpg?v=1683532153"
        },
        "price": 907.715008246281
    },
    {
        "id": 5,
        "name": "Engagement Ring 5",
        "popularityScore": 0.8,
        "weight": 2.5,
        "images": {
            "yellow": "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG074-100P-Y.jpg?v=1696232035",
            "rose": "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG074-100P-R.jpg?v=1696927124",
            "white": "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG074-100P-W.jpg?v=1696927124"
        },
        "price": 482.827132045894
    },
    {
        "id": 6,
        "name": "Engagement Ring 6",
        "popularityScore": 0.82,
        "weight": 1.8,
        "images": {
            "yellow": "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG075-100P-Y.jpg?v=1696591786",
            "rose": "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG075-100P-R.jpg?v=1696591802",
            "white": "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG075-100P-W.jpg?v=1696591798"
        },
        "price": 351.498152129411
    },
    {
        "id": 7,
        "name": "Engagement Ring 7",
        "popularityScore": 0.7,
        "weight": 5.2,
        "images": {
            "yellow": "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG094-100P-Y.jpg?v=1696589183",
            "rose": "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG094-100P-R.jpg?v=1696589214",
            "white": "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG094-100P-W.jpg?v=1696589210"
        },
        "price": 948.487077174601
    },
    {
        "id": 8,
        "name": "Engagement Ring 8",
        "popularityScore": 0.9,
        "weight": 3.7,
        "images": {
            "yellow": "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG115-100P-Y.jpg?v=1696596076",
            "rose": "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG115-100P-R.jpg?v=1696596151",
            "white": "https://cdn.shopify.com/s/files/1/0484/1429/4167/files/EG115-100P-W.jpg?v=1696596147"
        },
        "price": 754.283275173919
    }
]
const ProductContextProvider = ({children}) => {

    const [data, setData] = useState(products);

    // const fetchProducts = async () => {
    //     try {
    //         const response = await axios.get("https://renart-case-study.onrender.com/api/products");
    //         setData(response.data.products);
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };
    //
    //
    // useEffect(() => {
    //     fetchProducts();
    //
    // }, []);

    return (
        <ProductContext.Provider value={data}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;
export const useProductContext = () => useContext(ProductContext);
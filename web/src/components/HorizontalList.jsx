import React from 'react';
import ProductCard from "./ProductCard.jsx";
import {useProductContext} from "../Context/ProductContext.jsx";
import {MdChevronLeft, MdChevronRight} from "react-icons/md";


const HorizontalList = () => {

    //min width 300 + gap-42 ~ 168px
    const slideLeft = () => {
        const slider = document.getElementById("slider");
        slider.scrollLeft -= 468;
    }
    const slideRight = () => {
        const slider = document.getElementById("slider");
        slider.scrollLeft += 468;
    }

    const products = useProductContext();
    console.log(products)
    if (!products) return null;
    return (
        <div className="horizontalList relative flex justify-between w-full h-[500px] gap-3">
            {/*<span className="cursor-pointer flex-[0.13] flex items-center justify-center h-full">{'<'}</span>*/}
            <MdChevronLeft onClick={slideLeft}
                           className="w-1/2 cursor-pointer flex items-center justify-center h-2/3"
                           size={1}/>
            <div
                id="slider"
                className="flex overflow-x-scroll scroll whitespace-nowrap !scroll-smooth gap-42 h-full snap-x snap-mandatory"
            >
                {products.map(item => (
                    <ProductCard className="product flex-shrink-0" {...item} key={item.id}/>
                ))}
            </div>
            <MdChevronRight onClick={slideRight}
                            className="w-1/2 cursor-pointer flex items-center justify-center h-2/3"
                            size={1}/>
            {/*<span className="cursor-pointer flex-[0.13] flex items-center justify-center h-full">{'>'}</span>*/}
        </div>
    );
};

export default HorizontalList;
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
        <div className="horizontalList relative flex justify-between w-full h-fitllll lg:gap-3">
            {/*<span className="cursor-pointer flex-[0.13] flex items-center justify-center h-full">{'<'}</span>*/}
            <MdChevronLeft onClick={slideLeft}
                           className="chevron"
                           size={1}/>
            <div
                id="slider"
                className="flex overflow-x-scroll whitespace-nowrap !scroll-smooth
                  gap-42
                  min-[300px]:gap-0
                  sm:gap-2
                  md:gap-18
                  lg:gap-10
                  xl:gap-15
                  2xl:gap-42
                  snap-x snap-mandatory"
            >
                {products.map(item => (
                    <ProductCard className="product" {...item} key={item.id}/>
                ))}
            </div>
            <MdChevronRight onClick={slideRight}
                            className="chevron"
                            size={1}/>
            {/*<span className="cursor-pointer flex-[0.13] flex items-center justify-center h-full">{'>'}</span>*/}
        </div>
    );
};

export default HorizontalList;
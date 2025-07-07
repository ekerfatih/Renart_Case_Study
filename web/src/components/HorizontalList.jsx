import React, {useRef} from 'react';
import ProductCard from "./ProductCard.jsx";
import {useProductContext} from "../Context/ProductContext.jsx";
import {MdChevronLeft, MdChevronRight} from "react-icons/md";
import Loading from "./Loading.jsx";


const HorizontalList = () => {

    const slide = (direction) => {
        const slider = document.getElementById("slider");
        const firstItem = slider.querySelector('.product');
        const itemWidth = firstItem.offsetWidth;


        if (direction === 'right') {
            slider.scrollBy({left: itemWidth, behavior: 'smooth'});
        } else if (direction === 'left') {
            slider.scrollBy({left: -itemWidth, behavior: 'smooth'});
        }
    }
    const {data: products, loading} = useProductContext();


    return (
        loading ? (
            <Loading/>
        ) : (
            <div className="horizontalList relative flex justify-between w-full h-fit lg:gap-3">
                <div className="flex">
                    <MdChevronLeft onClick={() => slide("left")}
                                   className="chevron"
                                   size={24}/>
                </div>
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
                    {products && products.map(item => (
                        <div key={item.id}
                             className="product min-[300px]:min-w-[100%] sm:min-w-[44%] md:min-w-[45%] xl:min-w-[30%] 2xl:min-w-[17%]">
                            <ProductCard {...item} />
                        </div>
                    ))}
                </div>
                <div className="flex">
                    <MdChevronRight onClick={() => slide("right")}
                                    className="chevron"
                                    size={24}/>
                </div>
            </div>
        )
    )
};

export default HorizontalList;
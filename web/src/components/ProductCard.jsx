import React, {useEffect, useState} from 'react';
import RadioButton from "./RadioButton.jsx";
import StarRating from "./StarRating.jsx";
import {toCamel} from "../utilty/helper.js";

const ProductCard = (props) => {
    const {images, name, popularityScore, price} = props;
    const [color, setColor] = useState('yellow');
    const keys = Object.keys(images);
    const image = images[color];
    const starCount = Math.floor(popularityScore * 10) / 2;

    return (
        <div className="max-sm:mb-10 sm:mb-20 flex flex-col snap-start">
            <img className="rounded-4xl object-cover aspect-square" src={image} alt={name}/>
            <div className="text-left">
                <p className="font-montserrat-medium text-[15px] pt-4">{name}</p>
                <p className="font-montserrat text-[15px] pt-1 pb-3">  {`$${price.toFixed(2)} USD`}</p>
                <div className="flex gap-3 py-2 pl-2">
                    {keys.map((key) => (
                        <RadioButton color={key} name={name} key={key} setColor={setColor} selected={color}/>
                    ))}
                </div>
                <p className="font-avenir font-extralight text-[12px] py-1">{toCamel(color)} Gold</p>
                <div className="flex gap-3">
                    <StarRating rating={starCount}/>
                    <p className="font-avenir">{starCount}/5</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import burgerImg from "assets/burger.jpg";
import curryImg from "assets/curry.jpg";
import dumplingImg from "assets/dumplings.jpg";
import macncheeseImg from "assets/macncheese.jpg";
import pizzaImg from "assets/pizza.jpg";
import schnitzelImg from "assets/schnitzel.jpg";
import { motion } from "framer-motion";
// import tomatosaladImg from "assets/tomato-salad.jpg";

const images = [
    {
        src: burgerImg,
        alt: "Burger",
    },
    {
        src: curryImg,
        alt: "Curry",
    },
    {
        src: dumplingImg,
        alt: "Dumplings",
    },
    {
        src: macncheeseImg,
        alt: "Mac and Cheese",
    },
    {
        src: pizzaImg,
        alt: "Pizza",
    },
    {
        src: schnitzelImg,
        alt: "Schnitzel",
    },
];

export default function Slideshow() {
    const [imageIndex, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-full relative flex items-center justify-center">
            {images.map((images, index) => {
                return (
                    <Image
                        key={images.alt}
                        src={images.src}
                        alt={images.alt}
                        className={`w-full absolute h-auto object-fit rounded-lg transition-opacity duration-500 shadow-xl ease-in-out duration-500 
                            ${
                                index === imageIndex
                                    ? "opacity-100 "
                                    : "opacity-0 "
                            }

                            `}
                    />
                );
            })}
        </div>
    );
}

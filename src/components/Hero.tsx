"use client";

import Image from "next/image";
import { IonIcon } from "./utility/IonIcon";
import { memo, useState, useCallback, useEffect, useRef } from "react";

interface SliderItem {
    imgSrc: string;
    labelText: string;
    heroTitle: [string, string];
}

const SLIDER_DETAILS: SliderItem[] = [
    {
        imgSrc: "/images/hero-slider-1.jpg",
        labelText: "Tradational & Hygine",
        heroTitle: ["For the love of", "delicious food"]
    },
    {
        imgSrc: "/images/hero-slider-2.jpg",
        labelText: "delightful experience",
        heroTitle: ["Flavors Inspired by", "the Seasons"]
    },
    {
        imgSrc: "/images/hero-slider-3.jpg",
        labelText: "amazing & delicious",
        heroTitle: ["Where every flavor", "tells a story"]
    },
];

interface SliderItemProps extends SliderItem {
    isActive: boolean;
}

const SliderItem = memo(({
    imgSrc, labelText, heroTitle, isActive
}: SliderItemProps) => (
    <li
        className={`slider-item ${isActive ? 'active' : ''}`}
        data-hero-slider-item
    >
        <div className="slider-bg">
            <Image
                src={imgSrc}
                width={1880}
                height={950}
                alt=""
                className="img-cover"
            />
        </div>
        <p className="label-2 section-subtitle slider-reveal">{labelText}</p>
        <h1 className="display-1 hero-title slider-reveal">
            {heroTitle[0]} <br />
            {heroTitle[1]}
        </h1>
        <p className="body-2 hero-text slider-reveal">
            Come with family & feel the joy of mouthwatering food
        </p>
        <a
            href="#"
            className="btn btn-primary slider-reveal"
        >
            <span className="text text-1">View Our Menu</span>
            <span
                className="text text-2"
                aria-hidden="true"
            >
                View Our Menu
            </span>
        </a>
    </li>
));

SliderItem.displayName = "SliderItem";

export const Hero = memo(() => {
    const [currentSlidePos, setCurrentSlidePos] = useState(0);
    const autoSlideRef = useRef<NodeJS.Timeout | null>(null);

    const slideNext = useCallback(() => {
        setCurrentSlidePos(prevPos => {
            if (prevPos >= SLIDER_DETAILS.length - 1) {
                return 0;
            } else {
                return prevPos + 1;
            }
        });
    }, []);

    const slidePrev = useCallback(() => {
        setCurrentSlidePos(prevPos => {
            if (prevPos <= 0) {
                return SLIDER_DETAILS.length - 1;
            } else {
                return prevPos - 1;
            }
        });
    }, []);

    const startAutoSlide = useCallback(() => {
        if (autoSlideRef.current) {
            clearInterval(autoSlideRef.current);
        }
        autoSlideRef.current = setInterval(() => {
            slideNext();
        }, 7000);
    }, [slideNext]);

    const stopAutoSlide = useCallback(() => {
        if (autoSlideRef.current) {
            clearInterval(autoSlideRef.current);
            autoSlideRef.current = null;
        }
    }, []);

    const handleMouseOver = useCallback(() => {
        stopAutoSlide();
    }, [stopAutoSlide]);

    const handleMouseOut = useCallback(() => {
        startAutoSlide();
    }, [startAutoSlide]);

    useEffect(() => {
        startAutoSlide();

        return () => {
            stopAutoSlide();
        };
    }, [startAutoSlide, stopAutoSlide]);

    return <>
        <section
            className="hero text-center"
            aria-label="home"
            id="home"
        >
            <ul
                className="hero-slider"
                data-hero-slider
            >

                {SLIDER_DETAILS.map((slider, index) => (
                    <SliderItem
                        key={slider.imgSrc}
                        imgSrc={slider.imgSrc}
                        labelText={slider.labelText}
                        heroTitle={slider.heroTitle}
                        isActive={index === currentSlidePos}
                    />
                ))}

            </ul>

            <button
                className="slider-btn prev"
                aria-label="slide to previous"
                data-prev-btn
                onClick={slidePrev}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
                <IonIcon name="chevron-back" />
            </button>

            <button
                className="slider-btn next"
                aria-label="slide to next"
                data-next-btn
                onClick={slideNext}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
            >
                <IonIcon name="chevron-forward" />
            </button>

            <a
                href="#"
                className="hero-btn has-after"
            >
                <Image
                    src="/images/hero-icon.png"
                    width={48}
                    height={48}
                    alt="booking icon"
                />
                <span className="label-2 text-center span">Book A Table</span>
            </a>

        </section>
    </>;
});

Hero.displayName = "Hero";
import { TESTIMONIALS } from "@/constants";
import { TestimonialItem } from "@/types";
import Image from "next/image";
import { memo, useState, useCallback, useEffect, useRef } from "react";
import { IonIcon } from "./utility/IonIcon";
import { SlideLeftButton } from "./utility/Button/SlideLeftButton";
import { SlideRightButton } from "./utility/Button/SlideRightButton";

interface ReviewProps extends TestimonialItem {
    isActive: boolean;
}

const Review = memo(({ name, imgSrc, review, isActive }: ReviewProps) => (
    <li
        // className={`review-item ${isActive ? 'active' : ''}`}
        className={`slider-item ${isActive ? 'active' : ''}`}
        data-hero-slider-item
    >
        <p className="headline-2 testi-text">
            {review}
        </p>
        <div className="wrapper">

            {[...Array(3)].map((_, index) => (
                <div
                    key={index}
                    className="separator"
                />
            ))}

        </div>
        <div className="profile">

            {imgSrc && (
                <Image
                    src={imgSrc}
                    width={100}
                    height={100}
                    loading="lazy"
                    alt={name}
                    className="img"
                />
            )}

            <p className="label-2 profile-name">{name}</p>
        </div>
    </li>
));

Review.displayName = "Review";

export const Testimonial = memo(() => {
    const [currentSlidePos, setCurrentSlidePos] = useState(0);
    const autoSlideRef = useRef<NodeJS.Timeout | null>(null);

    const slideNext = useCallback(() => {
        setCurrentSlidePos(prevPos => {
            if (prevPos >= TESTIMONIALS.length - 1) {
                return 0;
            } else {
                return prevPos + 1;
            }
        });
    }, []);

    const slidePrev = useCallback(() => {
        setCurrentSlidePos(prevPos => {
            if (prevPos <= 0) {
                return TESTIMONIALS.length - 1;
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
        }, 6000);
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

    return (
        <section
            className="section testi review text-center has-bg-image"
            style={{ "backgroundImage": "url('/images/testimonial-bg.jpg')" } as React.CSSProperties}
            aria-label="testimonial-label"
        >
            <div className="custom-container">
                <div className="quote">”</div>

                <ul
                    // className="testimonial-slider"
                    className="hero-slider"
                    data-hero-slider
                >
                    {TESTIMONIALS.map((testimonial, index) => (
                        <Review
                            key={index}
                            name={testimonial.name}
                            imgSrc={testimonial.imgSrc}
                            review={testimonial.review}
                            isActive={index === currentSlidePos}
                        />
                    ))}
                </ul>

                {/* <div className="slider-controls"> */}

                <SlideLeftButton
                    onClick={slidePrev}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                />

                <SlideRightButton
                    onClick={slideNext}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                />

                {/* <button
                        className="slider-btn prev"
                        aria-label="slide to previous"
                        onClick={slidePrev}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                    >
                        <IonIcon name="chevron-back" />
                    </button>

                    <button
                        className="slider-btn next"
                        aria-label="slide to next"
                        onClick={slideNext}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                    >
                        <IonIcon name="chevron-forward" />
                    </button> */}

                {/* </div> */}
            </div>
        </section>
    );
});

Testimonial.displayName = "Testimonial";
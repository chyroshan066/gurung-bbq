import { TESTIMONIALS } from "@/constants";
import { TestimonialItem } from "@/types";
import Image from "next/image";
import { memo, useState, useCallback, useEffect, useRef } from "react";
import { IonIcon } from "./utility/IonIcon";

interface ReviewProps {
    testimonial: TestimonialItem;
    isActive: boolean;
}

const Review = memo(({ testimonial, isActive }: ReviewProps) => (
    <div className={`review-item ${isActive ? 'active' : ''}`}>
        <p className="headline-2 testi-text">
            {/* I wanted to thank you for inviting me down for that amazing dinner the other night. The food was
            extraordinary. */}
            {testimonial.review}
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

            {testimonial.imgSrc && (
                <Image
                    // src="/images/testimonials/t1.png"
                    src={testimonial.imgSrc}
                    width={100}
                    height={100}
                    loading="lazy"
                    // alt="Sam Jhonson"
                    alt={testimonial.name}
                    className="img"
                />
            )}

            <p className="label-2 profile-name">{testimonial.name}</p>
            {/* <p className="label-2 profile-name">Sam Jhonson</p> */}
        </div>
    </div>
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

    const slidePrev = useCallback(() => {
        setCurrentSlidePos(prevPos => {
            if (prevPos <= 0) {
                return TESTIMONIALS.length - 1;
            } else {
                return prevPos - 1;
            }
        });
    }, []);

    return <section
        className="section testi text-center has-bg-image"
        style={{ "backgroundImage": "url('/images/testimonial-bg.jpg')" } as React.CSSProperties}
        aria-label="testimonial-label"
        id="testimonial"
    >
        <div className="custom-container">
            <div className="quote">”</div>
            {/* <Review /> */}
            <div className="testimonial-slider">
                {TESTIMONIALS.map((testimonial, index) => (
                    <Review
                        key={index}
                        testimonial={testimonial}
                        isActive={index === currentSlidePos}
                    />
                ))}
            </div>
            <div className="slider-controls">
                <button
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
                </button>
            </div>
        </div>
    </section>
});

Testimonial.displayName = "Testimonial";
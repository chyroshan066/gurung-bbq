"use client";

import Image from "next/image";
import { memo } from "react";
import { useEffect } from 'react';

export const useParallax = () => {
    useEffect(() => {
        const parallaxItems = document.querySelectorAll("[data-parallax-item]");

        const handleMouseMove = (event: MouseEvent) => {
            let x = (event.clientX / window.innerWidth * 10) - 5;
            let y = (event.clientY / window.innerHeight * 10) - 5;

            // reverse the number eg. 20 -> -20, -5 -> 5
            x = x - (x * 2);
            y = y - (y * 2);

            for (let i = 0, len = parallaxItems.length; i < len; i++) {
                const item = parallaxItems[i] as HTMLElement;
                const speed = Number(item.dataset.parallaxSpeed);
                const transformX = x * speed;
                const transformY = y * speed;
                item.style.transform = `translate3d(${transformX}px, ${transformY}px, 0px)`;
            }
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);
};

export const About = memo(() => {
    useParallax();

    return <>
        <section
            className="section about text-center"
            aria-labelledby="about-label"
            id="about"
        >
            <div className="custom-container">
                <div className="about-content">
                    <p
                        className="label-2 section-subtitle"
                        id="about-label"
                    >
                        Our Story
                    </p>
                    <h2 className="headline-1 section-title">Every Flavor Tells a Story</h2>
                    <p className="section-text">
                        Lorem Ipsum is simply dummy text of the printingand typesetting industry lorem Ipsum has been the
                        industrys standard dummy text ever since the when an unknown printer took a galley of type and scrambled
                        it to make a type specimen book It has survived not only five centuries, but also the leap into.
                    </p>
                    <div className="contact-label">Book Through Call</div>
                    <a
                        href="tel:+804001234567"
                        className="body-1 contact-number hover-underline"
                    >
                        +80 (400) 123 4567
                    </a>
                    <a
                        href="#"
                        className="btn btn-primary"
                    >
                        <span className="text text-1">Read More</span>
                        <span
                            className="text text-2"
                            aria-hidden="true"
                        >
                            Read More
                        </span>
                    </a>

                </div>
                <figure className="about-banner">

                    <Image
                        src="/images/about-banner.jpg"
                        width={570}
                        height={570}
                        loading="lazy"
                        alt="about banner"
                        className="w-fill"
                        data-parallax-item
                        data-parallax-speed="1"
                    />

                    <div
                        className="abs-img abs-img-1 has-before"
                        data-parallax-item
                        data-parallax-speed="1.75"
                    >

                        <Image
                            src="/images/about-abs-image.jpg"
                            width={285}
                            height={285}
                            loading="lazy"
                            alt=""
                            className="w-fill"
                        />

                    </div>
                    <div className="abs-img abs-img-2 has-before">
                        <Image
                            src="/images/badge-2.png"
                            width="133"
                            height="134"
                            loading="lazy"
                            alt=""
                        />
                    </div>
                </figure>

                <Image
                    src="/images/shape-3.png"
                    width="197"
                    height="194"
                    loading="lazy"
                    alt=""
                    className="shape"
                />

            </div>
        </section>
    </>;
});

About.displayName = "About";
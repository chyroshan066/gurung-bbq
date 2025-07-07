import Image from "next/image"
import { memo } from "react";

interface Feature {
    imgSrc: string;
    title: string;
    text: string;
}

const FEATURE_LIST: Feature[] = [
    {
        imgSrc: "/images/features-icon-1.png",
        title: "Hygienic Food",
        text: "Lorem Ipsum is simply dummy printing and typesetting.",
    },
    {
        imgSrc: "/images/features-icon-2.png",
        title: "Fresh Environment",
        text: "Lorem Ipsum is simply dummy printing and typesetting.",
    },
    {
        imgSrc: "/images/features-icon-3.png",
        title: "Skilled Chefs",
        text: "Lorem Ipsum is simply dummy printing and typesetting.",
    },
    {
        imgSrc: "/images/features-icon-4.png",
        title: "Event & Party",
        text: "Lorem Ipsum is simply dummy printing and typesetting.",
    },
];

const FeatureCard = memo(({
    imgSrc, title, text
}: Feature) => (
    <li className="feature-item">
        <div className="feature-card">

            <div className="card-icon">
                <Image
                    src={imgSrc}
                    width={100}
                    height={80}
                    loading="lazy"
                    alt="icon"
                />
            </div>

            <h3 className="title-2 card-title">{title}</h3>
            <p className="label-1 card-text">{text}</p>
        </div>
    </li>
));

FeatureCard.displayName = "FeatureCard";

export const Features = memo(() => (
    <section
        className="section features text-center"
        aria-label="features"
    >
        <div className="custom-container">
            <p className="section-subtitle label-2">Why Choose Us</p>
            <h2 className="headline-1 section-title">Our Strength</h2>
            <ul className="grid-list">

                {FEATURE_LIST.map(feature => (
                    <FeatureCard
                        key={feature.imgSrc}
                        imgSrc={feature.imgSrc}
                        title={feature.title}
                        text={feature.text}
                    />
                ))}

            </ul>

            <Image
                src="/images/shape-7.png"
                width={208}
                height={178}
                loading="lazy"
                alt="shape"
                className="shape shape-1"
            />

            <Image
                src="/images/shape-8.png"
                width={120}
                height={115}
                loading="lazy"
                alt="shape"
                className="shape shape-2"
            />

        </div>
    </section>
));

Features.displayName = "Features";
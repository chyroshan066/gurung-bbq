import Image from "next/image";
import { memo } from "react";

interface ServiceCard {
    imgSrc: string;
    cardTitle: string
}

const SERVICES: ServiceCard[] = [
    {
        imgSrc: "/images/service-1.jpg",
        cardTitle: "Breakfast",
    },
    {
        imgSrc: "/images/service-2.jpg",
        cardTitle: "Appetizers",
    },
    {
        imgSrc: "/images/service-3.jpg",
        cardTitle: "Drinks",
    },
];

const ServiceCard = memo(({
    imgSrc, cardTitle
}: ServiceCard) => (
    <li>
        <div className="service-card">
            <a
                href="#"
                className="has-before hover:shine"
            >
                <figure
                    className="card-banner img-holder"
                    style={{ "--width": "285", "--height": "336" } as React.CSSProperties}>
                    <Image
                        src={imgSrc}
                        width={285}
                        height={336}
                        loading="lazy"
                        alt={cardTitle}
                        className="img-cover"
                    />
                </figure>
            </a>
            <div className="card-content">
                <h3 className="title-4 card-title">
                    <a href="#">{cardTitle}</a>
                </h3>
                <a
                    href="#"
                    className="btn-text hover-underline label-2"
                >
                    View Menu
                </a>
            </div>
        </div>
    </li>
));

ServiceCard.displayName = "ServiceCard";

export const Service = memo(() => (
    <section
        className="section service bg-black-10 text-center"
        aria-label="service"
    >
        <div className="custom-container">
            <p className="section-subtitle label-2">Flavors For Royalty</p>
            <h2 className="headline-1 section-title">We Offer Top Notch</h2>
            <p className="section-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys
                standard dummy text ever.
            </p>
            <ul className="grid-list">

                {SERVICES.map(service => (
                    <ServiceCard
                        key={service.imgSrc}
                        imgSrc={service.imgSrc}
                        cardTitle={service.cardTitle}
                    />
                ))}

            </ul>

            <Image
                src="/images/shape-1.png"
                width="246"
                height="412"
                loading="lazy"
                alt="shape"
                className="shape shape-1 move-anim"
            />

            <Image
                src="/images/shape-2.png"
                width="343"
                height="345"
                loading="lazy"
                alt="shape"
                className="shape shape-2 move-anim"
            />

        </div>
    </section>
));

Service.displayName = "Service";
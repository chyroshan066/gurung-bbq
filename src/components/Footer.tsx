import { memo } from "react";
import { IonIcon } from "./utility/IonIcon";
import Image from "next/image";
import { NAV_LINKS } from "@/constants/navLinks";
import { Link } from "@/types";

const SOCIAL_LINKS: Link[] = [
    {
        name: "Facebook",
        href: "#",
    },
    {
        name: "Instagram",
        href: "#",
    },
    {
        name: "Twitter",
        href: "#",
    },
    {
        name: "Youtube",
        href: "#",
    },
    {
        name: "Google Maps",
        href: "#",
    },
];

export const Footer = memo(() => (
    <footer
        className="footer section has-bg-image text-center"
        style={{ "backgroundImage": "url('./assets/images/footer-bg.jpg')" } as React.CSSProperties}
    >
        <div className="custom-container">
            <div className="footer-top grid-list">
                <div className="footer-brand has-before has-after">

                    <a
                        href="#"
                        className="logo flex justify-center"
                    >
                        <Image
                            src="/images/logo.png"
                            width={160}
                            height={50}
                            loading="lazy"
                            alt="Gurung BBQ Home"
                        />
                    </a>

                    <address className="body-4">
                        Restaurant St, Delicious City, London 9578, UK
                    </address>
                    <a
                        href="mailto:booking@grilli.com"
                        className="body-4 contact-link"
                    >
                        booking@grilli.com
                    </a>
                    <a
                        href="tel:+88123123456"
                        className="body-4 contact-link"
                    >
                        Booking Request : +88-123-123456
                    </a>
                    <p className="body-4">
                        Open : 09:00 am - 01:00 pm
                    </p>

                    <div className="wrapper">
                        {[...Array(3)].map((_, index) => (
                            <div
                                key={index}
                                className="separator"
                            />
                        ))}
                    </div>

                    <p className="title-1">Get News & Offers</p>
                    <p className="label-1">
                        Subscribe us & Get <span className="span">25% Off.</span>
                    </p>
                    <form
                        action=""
                        className="input-wrapper"
                    >
                        <div className="icon-wrapper">

                            <IonIcon
                                name="mail-outline"
                                aria-hidden="true"
                            />

                            <input
                                type="email"
                                name="email_address"
                                placeholder="Your email"
                                autoComplete="off"
                                className="input-field"
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-secondary"
                        >
                            <span className="text text-1">Subscribe</span>
                            <span
                                className="text text-2"
                                aria-hidden="true"
                            >
                                Subscribe
                            </span>
                        </button>
                    </form>
                </div>

                <ul className="footer-list">
                    {NAV_LINKS.map(link => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="label-2 footer-link hover-underline"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <ul className="footer-list">
                    {SOCIAL_LINKS.map(link => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="label-2 footer-link hover-underline"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

            </div>
            <div className="footer-bottom">
                <p className="copyright">
                    &copy; 2022 Grilli. All Rights Reserved | Crafted by <a href="https://github.com/chyroshan066"
                        target="_blank" className="link">chyroshan066</a>
                </p>
            </div>
        </div>
    </footer>
));

Footer.displayName = "Footer";
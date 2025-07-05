import Image from "next/image";
import { IonIcon } from "./utility/IonIcon";

export const Header = () => {
    return <>
        <header className="header" data-header>
            <div className="custom-container">

                <a
                    href="#"
                    className="logo"
                >
                    {/* <div className="relative w-40 h-12.5 aspect-square"> */}
                    <Image
                        src="/images/logo.png"
                        width={160}
                        height={50}
                        // fill
                        alt="Grilli - Home"
                    // className="w-40 h-12.5"
                    // className="object-cover"
                    />
                    {/* </div> */}
                </a>

                <nav
                    className="navbar"
                    data-navbar>

                    <button
                        className="close-btn"
                        aria-label="close menu"
                        data-nav-toggler
                    >
                        <IonIcon
                            name="close-outline"
                            aria-hidden="true"
                        />
                    </button>

                    <a
                        href="#"
                        className="logo"
                    >
                        <img
                            src="/images/logo.png"
                            width="160"
                            height="50"
                            alt="Gurung BBQ - Home"
                        />
                    </a>

                    <ul className="navbar-list">
                        <li className="navbar-item">
                            <a
                                href="#home"
                                className="navbar-link hover-underline active"
                            >
                                <div className="separator"></div>
                                <span className="span">Home</span>
                            </a>
                        </li>
                        <li className="navbar-item">
                            <a
                                href="#menu"
                                className="navbar-link hover-underline"
                            >
                                <div className="separator"></div>
                                <span className="span">Menus</span>
                            </a>
                        </li>
                        <li className="navbar-item">
                            <a
                                href="#about"
                                className="navbar-link hover-underline"
                            >
                                <div className="separator"></div>
                                <span className="span">About Us</span>
                            </a>
                        </li>
                        <li className="navbar-item">
                            <a
                                href="#"
                                className="navbar-link hover-underline"
                            >
                                <div className="separator"></div>
                                <span className="span">Our Chefs</span>
                            </a>
                        </li>
                        <li className="navbar-item">
                            <a
                                href="#"
                                className="navbar-link hover-underline"
                            >
                                <div className="separator"></div>
                                <span className="span">Contact</span>
                            </a>
                        </li>
                    </ul>
                    <div className="text-center">
                        <p className="headline-1 navbar-title">Visit Us</p>
                        <address className="body-4">
                            Ganeshman Chowk, <br />
                            Dharan, Nepal
                        </address>
                        <p className="body-4 navbar-text">Open: 9.00 am - 10.00pm</p>
                        <a
                            href="mailto:gurunghotkitchen123@gmail.com"
                            className="body-4 sidebar-link"
                        >
                            gurunghotkitchen123@gmail.com
                        </a>
                        <div className="separator"></div>
                        <p className="contact-label">Booking Request</p>
                        <a
                            href="tel:+977-25-570068"
                            className="body-1 contact-number hover-underline"
                        >
                            +977-25-570068
                        </a>
                    </div>
                </nav>
                <a
                    href="#"
                    className="btn btn-secondary"
                >
                    <span className="text text-1">Find A Table</span>
                    <span
                        className="text text-2"
                        aria-hidden="true"
                    >
                        Find A Table
                    </span>
                </a>
                <button
                    className="nav-open-btn"
                    aria-label="open menu"
                    data-nav-toggler
                >
                    <span className="line line-1"></span>
                    <span className="line line-2"></span>
                    <span className="line line-3"></span>
                </button>
                <div
                    className="overlay"
                    data-nav-toggler data-overlay
                />
            </div>
        </header>
    </>;
};
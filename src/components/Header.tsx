"use client";

import Image from "next/image";
import { IonIcon } from "./utility/IonIcon";
import { memo, useEffect, useMemo, useState, useCallback } from "react";
import { NAV_LINKS } from "@/constants/navLinks";
import { NavLink } from "@/types";

const NavItem = memo(({
    href, isActive, name
}: NavLink) => (
    <>
        <li className="navbar-item">
            <a
                href={href}
                className={`navbar-link hover-underline ${isActive ? "active" : ""}`}
            >
                <div className="separator"></div>
                <span className="span">{name}</span>
            </a>
        </li>
    </>
));

NavItem.displayName = "NavItem";

export const Header = memo(() => {
    const [activeHash, setActiveHash] = useState('#home');
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const [isHeaderActive, setIsHeaderActive] = useState(false);
    const [isHeaderHidden, setIsHeaderHidden] = useState(false);
    const [lastScrollPos, setLastScrollPos] = useState(0);

    // Handle hash changes for active navigation
    useEffect(() => {
        const handleHashChange = () => {
            setActiveHash(window.location.hash);
        };

        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);

    // Handle scroll events for header behavior
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Header active state and back-to-top button
            if (currentScrollY >= 50) {
                setIsHeaderActive(true);
            } else {
                setIsHeaderActive(false);
            }

            // Hide header on scroll down, show on scroll up
            const isScrollBottom = lastScrollPos < currentScrollY;
            if (isScrollBottom) {
                setIsHeaderHidden(true);
            } else {
                setIsHeaderHidden(false);
            }

            setLastScrollPos(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollPos]);

    const toggleNavbar = useCallback(() => {
        setIsNavbarOpen(prev => {
            const newState = !prev;

            // Toggle body class for nav-active state
            if (newState) {
                document.body.classList.add('nav-active');
            } else {
                document.body.classList.remove('nav-active');
            }

            return newState;
        });
    }, []);

    const handleNavLinkClick = useCallback(() => {
        setIsNavbarOpen(false);
        document.body.classList.remove('nav-active');
    }, []);

    useEffect(() => {
        return () => {
            document.body.classList.remove('nav-active');
        };
    }, []);

    const navItemsWithActiveState = useMemo(() =>
        NAV_LINKS.map(link => ({
            ...link,
            isActive: activeHash === link.href
        })), [activeHash]
    );

    return <>
        <header
            className={`header ${isHeaderActive ? 'active' : ''} ${isHeaderHidden ? 'hide' : ''}`}
            data-header
        >
            <div className="custom-container">

                <a
                    href="#"
                    className="logo"
                >
                    <Image
                        src="/images/logo.png"
                        width={160}
                        height={50}
                        alt="Gurung BBQ - Home"
                    />
                </a>

                <nav
                    className={`navbar ${isNavbarOpen ? 'active' : ''}`}
                    data-navbar>

                    <button
                        className="close-btn"
                        aria-label="close menu"
                        data-nav-toggler
                        onClick={toggleNavbar}
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
                        <Image
                            src="/images/logo.png"
                            width="160"
                            height="50"
                            alt="Gurung BBQ - Home"
                        />
                    </a>

                    <ul className="navbar-list">
                        {navItemsWithActiveState.map(link => (
                            <div key={link.href} onClick={handleNavLinkClick}>
                                <NavItem
                                    href={link.href}
                                    isActive={link.isActive}
                                    name={link.name}
                                />
                            </div>
                        ))}
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
                    onClick={toggleNavbar}
                >
                    <span className="line line-1"></span>
                    <span className="line line-2"></span>
                    <span className="line line-3"></span>
                </button>
                <div
                    className={`overlay ${isNavbarOpen ? 'active' : ''}`}
                    data-nav-toggler
                    data-overlay
                    onClick={toggleNavbar}
                />
            </div>
        </header>
    </>;
});

Header.displayName = "Header";
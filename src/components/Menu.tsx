"use client";

import { MENU_LIST, VENUE_LIST } from "@/constants";
import { MenuType } from "@/types";
import Image from "next/image";
import { memo, useState } from "react";

const MenuCard = memo(({
    title, badge, cost
}: MenuType) => (
    <li className="-mb-20">
        <div className="menu-card hover:card">
            <div className="title-wrapper w-fill mobile:block flex justify-between mobile:justify-baseline">
                <div className="flex gap-2 ">
                    <h3 className="title-3 self-center">
                        <p className="card-title">
                            {title}
                        </p>
                    </h3>
                    {badge && <span className="badge label-1">{badge}</span>}
                </div>
                <span className="span title-2">Rs. {cost}</span>
            </div>
        </div>
    </li>
));

MenuCard.displayName = "MenuCard";

const MenuCategory = memo(({
    title, arr, className
}: {
    title: string, arr: MenuType[], className?: string
}) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const itemsToShow = isExpanded ? arr : arr.slice(0, 6);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={className}>
            <h2 className="headline-1 section-title text-center">{title}</h2>
            <ul className="grid-list">

                {itemsToShow.map((menu, index) => (
                    <MenuCard
                        key={index}
                        title={menu.title}
                        badge={menu.badge}
                        cost={menu.cost}
                    />
                ))}

            </ul>

            {arr.length > 6 && (
                <button
                    className="btn btn-primary mt-30"
                    onClick={toggleExpanded}
                >
                    <span className="text text-1">
                        {isExpanded ? "See Less" : "See More"}
                    </span>
                    <span
                        className="text text-2"
                        aria-hidden="true"
                    >
                        {isExpanded ? "See Less" : "See More"}
                    </span>
                </button>
            )}

        </div>
    );
});

MenuCategory.displayName = "MenuCategory";

export const Menu = memo(() => (
    <section
        className="section menu"
        aria-label="menu-label"
        id="menu"
    >
        <div className="custom-container">
            <p className="section-subtitle text-center label-2">Special Selection</p>

            <MenuCategory
                title={"Delicious Menu"}
                arr={MENU_LIST}
                className="mt-20"
            />

            <MenuCategory
                title={"Delicious Menu"}
                arr={VENUE_LIST}
                className="mt-40"
            />

            <p
                className="menu-text text-center"
                style={{ marginTop: '80px' }}
            >
                Daily from <span className="span">9:00 am</span> to <span className="span">10:00 pm</span>
            </p>

            <Image
                src="/images/shape-5.png"
                width={921}
                height={1036}
                loading="lazy"
                alt="shape"
                className="shape shape-2 move-anim"
            />

            <Image
                src="/images/shape-6.png"
                width={343}
                height={345}
                loading="lazy"
                alt="shape"
                className="shape shape-3 move-anim"
            />

        </div>
    </section>
));

Menu.displayName = "Menu";
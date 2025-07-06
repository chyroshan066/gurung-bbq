import Image from "next/image";
import { memo } from "react";

interface Menu {
    imgSrc: string;
    title: string;
    badge?: string;
    cost: number;
    text: string;
}

const MENU_LIST: Menu[] = [
    {
        imgSrc: "/images/menu-1.png",
        title: "Greek Salad",
        badge: "Seasonal",
        cost: 25.50,
        text: "Tomatoes, green bell pepper, sliced cucumber onion, olives, and feta cheese.",
    },
    {
        imgSrc: "/images/menu-2.png",
        title: "Lasagne",
        cost: 40.00,
        text: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.",
    },
    {
        imgSrc: "/images/menu-3.png",
        title: "Butternut Pumpkin",
        cost: 10.00,
        text: "Typesetting industry lorem Lorem Ipsum is simply dummy text of the priand.",
    },
    {
        imgSrc: "/images/menu-4.png",
        title: "Tokusen Wagyu",
        badge: "New",
        cost: 39.00,
        text: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.",
    },
    {
        imgSrc: "/images/menu-5.png",
        title: "Olivas Rellenas",
        cost: 25.00,
        text: "Avocados with crab meat, red onion, crab salad stuffed red bell pepper and green bell pepper.",
    },
    {
        imgSrc: "/images/menu-6.png",
        title: "Opu Fish",
        cost: 49.00,
        text: "Vegetables, cheeses, ground meats, tomato sauce, seasonings and spices.",
    },
];

const MenuCard = memo(({
    imgSrc, title, badge, cost, text
}: Menu) => (
    <li>
        <div className="menu-card hover:card">
            <figure
                className="card-banner img-holder"
                style={{ "--width": "100", "--height": "100" } as React.CSSProperties}
            >
                <Image
                    src={imgSrc}
                    width={100}
                    height={100}
                    loading="lazy"
                    alt={title}
                    className="img-cover"
                />
            </figure>
            <div>
                <div className="title-wrapper">
                    <h3 className="title-3">
                        <a
                            href="#"
                            className="card-title"
                        >
                            {title}
                        </a>
                    </h3>
                    {badge && <span className="badge label-1">{badge}</span>}
                    <span className="span title-2">Rs. {cost}</span>
                </div>
                <p className="card-text label-1">
                    {text}
                </p>
            </div>
        </div>
    </li>
));

MenuCard.displayName = "MenuCard";

export const Menu = memo(() => (
    <section
        className="section menu"
        aria-label="menu-label"
        id="menu"
    >
        <div className="custom-container">
            <p className="section-subtitle text-center label-2">Special Selection</p>
            <h2 className="headline-1 section-title text-center">Delicious Menu</h2>
            <ul className="grid-list">

                {MENU_LIST.map(menu => (
                    <MenuCard
                        key={menu.imgSrc}
                        imgSrc={menu.imgSrc}
                        title={menu.title}
                        badge={menu.badge}
                        cost={menu.cost}
                        text={menu.text}
                    />
                ))}

            </ul>
            <p className="menu-text text-center">
                Daily from <span className="span">9:00 am</span> to <span className="span">10:00 pm</span>
            </p>
            <a
                href="#"
                className="btn btn-primary"
            >
                <span className="text text-1">View All Menu</span>
                <span
                    className="text text-2"
                    aria-hidden="true"
                >
                    View All Menu
                </span>
            </a>

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
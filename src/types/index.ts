export interface Link {
    name: string;
    href: string;
}

export interface NavLink extends Link {
    isActive?: boolean;
}

export interface MenuType {
    title: string;
    badge?: string;
    cost: number;
}

export interface TestimonialItem {
    name: string;
    imgSrc?: string;
    review: string;
}

export interface SlideButton {
    onClick: () => void; 
    onMouseOut: () => void; 
    onMouseOver: () => void;
}
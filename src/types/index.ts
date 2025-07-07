export interface Link {
    name: string;
    href: string;
}

export interface NavLink extends Link {
    isActive?: boolean;
}
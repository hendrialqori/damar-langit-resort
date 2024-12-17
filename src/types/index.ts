export type Query = {
    menu: string;
    submenu: string;
    type: string;
}

export type Image = {
    id: number;
    cloudId: string;
    cloudUrl: string;
    menu: string;
    submenu: string;
    type: TypeSubMenu;
    createdAt: string;
}

export type TypeSubMenu = {
    id: number;
    name: string;
    createdAt?: string;
}

export type Map = {
    id: number;
    cloudId: string;
    cloudUrl: string;
    location: string;
    createdAt: string;
}

export type Promo = {
    id: number;
    cloudId: string;
    cloudUrl: string;
    createdAt: string;
}

export type Success<T> = {
    status: number;
    data: T;
    // metadata: Metadata
    message: string
}

export type Error = {
    errors: Record<string, []>
    type: string;
    status: string;
    message: string
}
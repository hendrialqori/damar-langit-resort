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
    type: string;
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
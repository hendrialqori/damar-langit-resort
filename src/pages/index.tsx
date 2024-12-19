import { lazy } from "react";

export const Home = lazy(() => import("#/pages/home"))

export const Menu = lazy(() => import("#/pages/menu"))
export const MenuGallery = lazy(() => import("#/pages/menu-gallery"))
export const MenuUpload = lazy(() => import("#/pages/menu-upload"))

export const MapGallery = lazy(() => import("#/pages/map-gallery"))
export const MapUpload = lazy(() => import("#/pages/map-upload"))

export const Promo = lazy(() => import("#/pages/promo"))
export const PromoGallery = lazy(() => import("#/pages/promo-gallery"))
export const PromoUpload = lazy(() => import("#/pages/promo-upload"))

export const ContactUs = lazy(() => import("#/pages/contact-us"))

export const NotFound = lazy(() => import("#/pages/404"))
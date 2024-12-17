import { Fragment } from "react"

import {
    createBrowserRouter,
    createRoutesFromElements,
    Navigate,
    Route,
    RouterProvider
} from "react-router-dom"

import Home from "../pages/home"
import Menu from "../pages/menu"
import Promo from "../pages/promo"
import ContactUs from "../pages/contact-us"

import Gallery from "../pages/gallery"
import Upload from "../pages/upload"

import MapUpload from "../pages/map-upload"
import MapGallery from "../pages/map-gallery"

import PromoGallery from "../pages/promo-gallery"
import PromoUpload from "../pages/promo-upload"
import NotFound from "../pages/404"

function appRoutes() {
    return createBrowserRouter(
        createRoutesFromElements(
            <Fragment>
                <Route path="/" element={<Home />} />
                <Route path="/:menu/:submenu/:type" element={<Menu />} />
                <Route path="/promo" element={<Promo />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/admin" element={<Navigate to="/media/gallery"/>} />
                <Route path="/media">
                    <Route path="gallery" element={<Gallery />} />
                    <Route path="upload" element={<Upload />} />
                </Route>
                <Route path="/map">
                    <Route path="gallery" element={<MapGallery />} />
                    <Route path="upload" element={<MapUpload />} />
                </Route>
                <Route path="/promo">
                    <Route path="gallery" element={<PromoGallery />} />
                    <Route path="upload" element={<PromoUpload />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Fragment>
        ))
}

export default function AppRoute() {
    return <RouterProvider router={appRoutes()} />
}
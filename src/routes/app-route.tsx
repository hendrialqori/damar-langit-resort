import { Fragment } from "react"

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom"

import Home from "../pages/home"
import Menu from "../pages/[menu]"

import Gallery from "../pages/gallery"
import Upload from "../pages/upload"

import MapUpload from "../pages/map-upload"
import MapGallery from "../pages/map-gallery"

function appRoutes() {
    return createBrowserRouter(
        createRoutesFromElements(
            <Fragment>
                <Route path="/" element={<Home />} />
                <Route path="/:menu/:submenu/:type" element={<Menu />} />
                <Route path="/media">
                    <Route path="gallery" element={<Gallery />} />
                    <Route path="upload" element={<Upload />} />
                </Route>
                <Route path="/map">
                    <Route path="gallery" element={<MapGallery />} />
                    <Route path="upload" element={<MapUpload />} />
                </Route>
            </Fragment>
        ))
}

export default function AppRoute() {
    return <RouterProvider router={appRoutes()} />
}
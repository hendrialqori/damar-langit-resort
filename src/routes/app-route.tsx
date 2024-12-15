import { Fragment } from "react"

import {
    createBrowserRouter,
    createRoutesFromElements,
    Navigate,
    Route,
    RouterProvider
} from "react-router-dom"

import Home from "../pages/home"
import Menu from "../pages/[menu]"
import Gallery from "../pages/gallery"
import Upload from "../pages/upload"

function appRoutes() {
    return createBrowserRouter(
        createRoutesFromElements(
            <Fragment>
                <Route path="/" element={<Home />} />
                <Route path="/:menu/:submenu/:type" element={<Menu />} />
                <Route path="/admin">
                    <Route index element={<Navigate to="/admin/upload" />} />
                    <Route path="gallery" element={<Gallery />} />
                    <Route path="upload" element={<Upload />} />
                </Route>
            </Fragment>
        ))
}

export default function AppRoute() {
    return <RouterProvider router={appRoutes()} />
}
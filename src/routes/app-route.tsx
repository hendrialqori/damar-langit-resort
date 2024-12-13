import { Fragment } from "react"

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom"

import Home from "../pages/home"
import Menu from "../pages/[menu]"

function appRoutes() {
    return createBrowserRouter(
        createRoutesFromElements(
            <Fragment>
                <Route path="/" element={<Home />} />
                <Route path="/menu/:submenu/:type" element={<Menu />} />
            </Fragment>
        ))
}

export default function AppRoute() {
    return <RouterProvider router={appRoutes()} />
}
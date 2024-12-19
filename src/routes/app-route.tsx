import { Fragment } from "react"
import {
    createBrowserRouter,
    createRoutesFromElements,
    Navigate,
    Route,
    RouterProvider
} from "react-router-dom"

import * as Page from "#/pages"

function appRoutes() {
    return createBrowserRouter(
        createRoutesFromElements(
            <Fragment>
                <Route path="/" element={<Page.Home />} />
                <Route path="/:menu/:submenu/:type" element={<Page.Menu />} />
                <Route path="/promo" element={<Page.Promo />} />
                <Route path="/contact-us" element={<Page.ContactUs />} />
                <Route path="/admin" element={<Navigate to="/media/gallery" />} />
                <Route path="/media">
                    <Route path="gallery" element={<Page.MenuGallery />} />
                    <Route path="upload" element={<Page.MenuUpload />} />
                </Route>
                <Route path="/map">
                    <Route path="gallery" element={<Page.MapGallery />} />
                    <Route path="upload" element={<Page.MapUpload />} />
                </Route>
                <Route path="/promo">
                    <Route path="gallery" element={<Page.PromoGallery />} />
                    <Route path="upload" element={<Page.PromoUpload />} />
                </Route>
                <Route path="*" element={<Page.NotFound />} />
            </Fragment>
        ))
}

export default function AppRoute() {
    return <RouterProvider router={appRoutes()} />
}
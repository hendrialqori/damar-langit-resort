import React from "react"
import cn from "clsx"

function Menu() {

    const [isShow, setShow] = React.useState(false)


}

const classShow = "bg-white shadow-md"
const classHide = "bg-transparent text-white"

export default function Header() {

    const [show, setShow] = React.useState(false)

    React.useEffect(() => {
        function scrollTrigger() {
            const max_scroll_height_to_show_navbar = 70
            if (window.scrollY > max_scroll_height_to_show_navbar) {
                setShow(true)
            } else {
                setShow(false)
            }
        }

        window.addEventListener("scroll", scrollTrigger)
        return () => window.removeEventListener("scroll", scrollTrigger)
    }, [])

    return (
        <header className={cn("fixed left-0 right-0 z-10 transition duration-300", show ? classShow : classHide)}>
            <div className="w-[calc(100%_-_50px)] max-w-7xl mx-auto py-1 flex items-center justify-between" aria-label="content">
                <img src="resort-icon.png" className="" alt="logo" loading="lazy" width="50px" height="70px" />
                <ul className="flex items-center gap-8 text-sm font-light">
                    <li>HOME</li>
                    <li>RESTO</li>
                    <li>ROOM</li>
                    <li>ADVENTURE</li>
                    <li>MAPS</li>
                    <li>CONTACT US</li>
                </ul>
            </div>
        </header>
    )
}
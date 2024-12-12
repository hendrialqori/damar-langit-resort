import React from "react"
import cn from "clsx"
import { RxHamburgerMenu } from "react-icons/rx";
import { motion } from "framer-motion"

const classShow = "bg-white shadow-md"
const classHide = "bg-transparent text-white"

export default function Header() {

    const [showNavbar, setShowNavbar] = React.useState(false)
    const [expandMobileMenu, setExpandMobileMenu] = React.useState(false)

    React.useEffect(() => {
        function scrollTrigger() {
            const max_scroll_height_to_show_navbar = 70
            if (window.scrollY > max_scroll_height_to_show_navbar) {
                setShowNavbar(true)
            } else {
                setShowNavbar(false)
            }
        }

        window.addEventListener("scroll", scrollTrigger)
        return () => window.removeEventListener("scroll", scrollTrigger)
    }, [])

    return (
        <header className={cn("fixed left-0 right-0 z-10 transition duration-300", showNavbar ? classShow : classHide)}>
            <div className="w-[calc(100%_-_50px)] max-w-7xl mx-auto py-1 flex items-center justify-between" aria-label="content">
                <img src="resort-icon.png" className="" alt="logo" loading="lazy" width="50px" height="70px" />
                <ul className="hidden md:flex items-center gap-8 text-sm font-light">
                    <li>HOME</li>
                    <li>RESTO</li>
                    <li>ROOM</li>
                    <li>ADVENTURE</li>
                    <li>MAPS</li>
                    <li>CONTACT US</li>
                </ul>
                <button className="block md:hidden bg-[#f7c552] px-3 py-1.5 rounded-md" onClick={() => setExpandMobileMenu((prev) => !prev)}>
                    <RxHamburgerMenu className="text-2xl text-white" />
                </button>
            </div>
            <motion.div
                className="bg-white text-black overflow-hidden"
                initial={{ height: 0 }}
                animate={{ height: expandMobileMenu ? "max-content" : 0 }}

            >
                <div className="text-center text-[0.85rem] font-light border-b border-gray-200">
                    <button className="text-center py-5">
                        RESTO
                    </button>
                </div>
                <div className="text-center text-[0.85rem] font-light border-b border-gray-200">
                    <button className="text-center py-5">
                        ROOM
                    </button>
                </div>
                <div className="text-center text-[0.85rem] font-light border-b border-gray-200">
                    <button className="text-center py-5">
                        ADVENTURE
                    </button>
                </div>
                <div className="text-center text-[0.85rem] font-light border-b border-gray-200">
                    <button className="text-center py-5">
                        MAPS
                    </button>
                </div>
                <div className="text-center text-[0.85rem] font-light border-b border-gray-200">
                    <button className="text-center py-5">
                        CONTACT US
                    </button>
                </div>
            </motion.div>
        </header>
    )
}
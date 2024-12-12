import React from "react"
import { motion } from "framer-motion"
import cn from "clsx"
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";

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
                    <ExpandableMenu title="RESTO" submenu={["DTP", "PAKIS", "DINING", "KEDAI"]} />
                    <ExpandableMenu title="ROOM" submenu={
                        ["CAMPING", "SUPERIOR", "GLAPING", "VILLA KAYU", "GRAND DELUX", "EXECUTIVE SWITE", "2 BEDROOM VILLA", "VILLA LUMBUNG"]
                    } />
                    <ExpandableMenu title="ADVENTURE"
                        submenu={["AUZORA WATERFALL", "DAMAR WATERFALL", "AMARA SPA", "SYUTING TARGET", "PANAHAN"]}
                    />
                    <li>MAPS</li>
                    <li>CONTACT US</li>
                </ul>
                <button className="block md:hidden bg-[#f7c552] px-3 py-1.5 rounded-md" onClick={() => setExpandMobileMenu((prev) => !prev)}>
                    <RxHamburgerMenu className="text-2xl text-white" />
                </button>
            </div>
            <motion.div
                className="block md:hidden bg-white text-black max-h-screen overflow-auto"
                initial={{ height: 0 }}
                animate={{ height: expandMobileMenu ? "max-content" : 0 }}

            >
                <ExpandableMobileMenu title="RESTO" submenu={["DTP", "PAKIS", "DINING", "KEDAI"]} />
                <ExpandableMobileMenu title="ROOM" submenu={
                    ["CAMPING", "SUPERIOR", "GLAPING", "VILLA KAYU", "GRAND DELUX", "EXECUTIVE SWITE", "2 BEDROOM VILLA", "VILLA LUMBUNG"]
                } />
                <ExpandableMobileMenu title="ADVENTURE"
                    submenu={["AUZORA WATERFALL", "DAMAR WATERFALL", "AMARA SPA", "SYUTING TARGET", "PANAHAN"]}
                />
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


function ExpandableMenu({ title, submenu }: { title: string; submenu: string[] }) {
    const [expand, setExpand] = React.useState(false)

    return (
        <div className="relative"
            onMouseEnter={() => setExpand(true)}
            onMouseLeave={() => setExpand(false)}
        >
            <button className="relative flex justify-center items-center gap-3"

            >
                <span>{title}</span>
                <IoIosArrowDown className="text-lg" />
            </button>
            <motion.div
                initial={{ height: 0 }}
                animate={{ height: expand ? "max-content" : 0 }}
                className="absolute overflow-hidden translate-y-2 bg-white text-black w-40"
            >
                {submenu.map((sub, i) => (
                    <div key={i} className="text-center text-[0.9rem] font-light border-t border-gray-200 bg-gray-100">
                        <button className="text-center py-4 text-nowrap">
                            {sub}
                        </button>
                    </div>
                ))}

            </motion.div>
        </div>
    )
}

// Mobile Menu Item
function ExpandableMobileMenu({ title, submenu }: { title: string; submenu: string[] }) {

    const [expand, setExpand] = React.useState(false)

    return (
        <div className="text-center text-[0.85rem] font-light border-b border-gray-200">
            <button className="relative text-center py-5 w-full" onClick={() => setExpand((prev) => !prev)}>
                {title}
                <IoIosArrowDown className="absolute right-3 top-1/2 -translate-y-1/2 text-lg text-gray-400" />
            </button>
            <motion.div
                className="bg-white text-black overflow-hidden"
                initial={{ height: 0 }}
                animate={{ height: expand ? "max-content" : 0 }}
            >
                {submenu.map((sub, i) => (
                    <div key={i} className="text-center text-[0.75rem] font-light border-t border-gray-200 bg-gray-100">
                        <button className="text-center py-4">
                            {sub}
                        </button>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}
import React from "react"
import { motion } from "framer-motion"
import cn from "clsx"
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { scrollInto } from "../../utils/scroll-into";

const classShow = "bg-white shadow-md"
const classHide = "bg-transparent text-white"

function mergeSubName(subName: string) {
    return subName.split(" ").join("")
}

export default function Header() {

    const [showNavbar, setShowNavbar] = React.useState(false)
    const [expandMobileMenu, setExpandMobileMenu] = React.useState(false)

    function closeNavbarMobile() {
        setExpandMobileMenu(false)
    }

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
                <ul className="hidden md:flex items-start gap-10 text-sm font-light">
                    <li className="cursor-pointer">HOME</li>
                    <Expandable title="RESTO" submenu={["DTP", "PAKIS", "DINING", "KEDAI"]} />
                    <Expandable title="ROOM" submenu={
                        ["CAMPING", "SUPERIOR", "GLAPING", "VILLA KAYU", "GRAND DELUX", "EXECUTIVE SWITE", "2 BEDROOM VILLA", "VILLA LUMBUNG"]
                    } />
                    <Expandable title="ADVENTURE"
                        submenu={["AUZORA WATERFALL", "DAMAR WATERFALL", "AMARA SPA", "SYUTING TARGET", "PANAHAN"]}
                    />
                    <li className="cursor-pointer">MAPS</li>
                    <li className="cursor-pointer">CONTACT US</li>
                </ul>
                <button className="block md:hidden bg-[#f7c552] px-3 py-1.5 rounded-md" onClick={() => setExpandMobileMenu((prev) => !prev)}>
                    <RxHamburgerMenu className="text-2xl text-white" />
                </button>
            </div>

            {/* mobile menu */}
            <div className="h-[calc(100vh_-_80px)] overflow-auto">
                <motion.div
                    className="block md:hidden bg-white text-black"
                    initial={{ height: 0 }}
                    animate={{ height: expandMobileMenu ? "auto" : 0 }}
                >
                    <ExpandableMobile title="RESTO" submenu={["DTP", "PAKIS", "DINING", "KEDAI"]}
                        onCloseHeader={closeNavbarMobile}
                    />
                    <ExpandableMobile title="ROOM" submenu={
                        ["CAMPING", "SUPERIOR", "GLAPING", "VILLA KAYU", "GRAND DELUX", "EXECUTIVE SWITE", "2 BEDROOM VILLA", "VILLA LUMBUNG"]}
                        onCloseHeader={closeNavbarMobile}
                    />
                    <ExpandableMobile title="ADVENTURE"
                        submenu={["AUZORA WATERFALL", "DAMAR WATERFALL", "AMARA SPA", "SYUTING TARGET", "PANAHAN"]}
                        onCloseHeader={closeNavbarMobile}
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
            </div>
            {/* end mobile menu */}
        </header>
    )
}


interface ExpandableProps { title: string; submenu: string[], onCloseHeader?: () => void }

function Expandable({ title, submenu }: ExpandableProps) {
    const [expand, setExpand] = React.useState(false)

    return (
        <li className="relative"
            onMouseEnter={() => setExpand(true)}
            onMouseLeave={() => setExpand(false)}
        >
            <button className="relative flex justify-center items-center gap-3" >
                <span>{title}</span>
                <IoIosArrowDown className={cn("text-lg", expand ? "-rotate-90" : "rotate-0")} />
            </button>
            <div className="pt-2">
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: expand ? "max-content" : 0 }}
                    transition={{ duration: 0.5, bounce: false }}
                    className="absolute left-1/2 -translate-x-1/2 overflow-hidden bg-white text-black w-40"
                >
                    {submenu.map((sub, i) => {
                        const id = `#${mergeSubName(sub)}`
                        function action() {
                            scrollInto(id)
                        }
                        return (
                            <div key={i} className="text-center text-[0.9rem] font-light border-b border-gray-200">
                                <button
                                    className="text-center py-4 text-nowrap size-full"
                                    onClick={action}
                                >
                                    {sub}
                                </button>
                            </div>
                        )
                    })}
                </motion.div>
            </div>
        </li>
    )
}

// Mobile Menu Item
function ExpandableMobile({ title, submenu, onCloseHeader }: ExpandableProps) {
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
                {submenu.map((sub, i) => {
                    const id = `#${mergeSubName(sub)}`
                    function action() {
                        scrollInto(id)

                        setTimeout(() => {
                            onCloseHeader?.()
                        }, 500)
                    }

                    return (
                        <div key={i} className="text-center text-[0.75rem] font-light border-t border-gray-200 bg-gray-100">
                            <button
                                className="text-center py-4 size-full active:bg-gray-200 transition duration-200"
                                onClick={action}
                            >
                                {sub}
                            </button>
                        </div>
                    )
                })}
            </motion.div>
        </div>
    )
}
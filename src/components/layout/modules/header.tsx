import React from "react"
import { Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import cn from "clsx"
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { scrollInto } from "#/utils/scroll-into";
import { useGetTypeSubmenu } from "#/services/typesubmenu-service";
import { TypeSubMenu } from "#/types";

const classShow = "bg-white shadow-md"
const classHide = "bg-transparent text-white"

export default function Header() {

    const [showNavbar, setShowNavbar] = React.useState(false)
    const [expandMobileMenu, setExpandMobileMenu] = React.useState(false)

    function closeNavbarMobile() {
        setExpandMobileMenu(false)
    }

    function goToMap() {
        scrollInto("#maps")
        setTimeout(() => setExpandMobileMenu(false), 500)
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
                <img src="/resort-icon.png" className="" alt="logo" loading="lazy" width="50px" height="70px" />
                <ul className="hidden md:flex items-start gap-10 text-sm font-light">
                    <Link to="/" className="cursor-pointer">HOME</Link>
                    <Expandable title="RESTO" submenu={["DTP", "PAKIS", "DINING", "KEDAI"]} />
                    <Expandable title="ROOM" submenu={
                        ["CAMPING", "SUPERIOR", "GLAMPING", "VILLA KAYU", "GRAND DELUXE", "EXECUTIVE", "2B VILLA", "VILLA LUMBUNG"]
                    } />
                    <Expandable title="ADVENTURE"
                        submenu={["AUZORA WATERFALL", "DAMAR WATERFALL", "AMARA SPA", "SHOOT AND ADVENTURE"]}
                    />
                    <li className="cursor-pointer" onClick={goToMap}>MAPS</li>
                    <Link to="/promo">
                        <li className="cursor-pointer">PROMO</li>
                    </Link>
                    <Link to="/contact-us">
                        <li className="cursor-pointer">CONTACT US</li>
                    </Link>
                </ul>
                <button className="block md:hidden bg-[#f7c552] px-3 py-1.5 rounded-md" onClick={() => setExpandMobileMenu((prev) => !prev)}>
                    <RxHamburgerMenu className="text-2xl text-white" />
                </button>
            </div>

            {/* mobile menu */}
            <div className="max-h-[calc(100vh_-_80px)] overflow-auto">
                <motion.div
                    className="block md:hidden bg-white text-black overflow-hidden"
                    initial={{ height: 0 }}
                    animate={{ height: expandMobileMenu ? "auto" : 0 }}
                >
                    <Link to="/">
                        <div className="text-center text-[0.85rem] font-light border-b border-gray-200 py-5">
                            HOME
                        </div>
                    </Link>
                    <ExpandableMobile title="RESTO" submenu={["DTP", "PAKIS", "DINING", "KEDAI"]}
                        onCloseHeader={closeNavbarMobile}
                    />
                    <ExpandableMobile title="ROOM" submenu={
                        ["CAMPING", "SUPERIOR", "GLAMPING", "VILLA KAYU", "GRAND DELUXE", "EXECUTIVE", "2B VILLA", "VILLA LUMBUNG"]}
                        onCloseHeader={closeNavbarMobile}
                    />
                    <ExpandableMobile title="ADVENTURE"
                        submenu={["AUZORA WATERFALL", "DAMAR WATERFALL", "AMARA SPA", "SHOOT AND ADVENTURE"]}
                        onCloseHeader={closeNavbarMobile}
                    />
                    <Link to="/" onClick={goToMap}>
                        <div className="text-center text-[0.85rem] font-light border-b border-gray-200">
                            <button className="text-center py-5">
                                MAPS
                            </button>
                        </div>
                    </Link>
                    <Link to="/promo">
                        <div className="text-center text-[0.85rem] font-light border-b border-gray-200">
                            <button className="text-center py-5">
                                PROMO
                            </button>
                        </div>
                    </Link>
                    <Link to="/contact-us">
                        <div className="text-center text-[0.85rem] font-light border-b border-gray-200">
                            <button className="text-center py-5">
                                CONTACT US
                            </button>
                        </div>
                    </Link>
                </motion.div>
            </div>
            {/* end mobile menu */}
        </header>
    )
}


interface ExpandableProps { title: string; submenu: string[], onCloseHeader?: () => void }

function Expandable({ title, submenu }: ExpandableProps) {
    const navigate = useNavigate()

    const [expand, setExpand] = React.useState(false)

    const typeSubmenu = useGetTypeSubmenu()

    function navigateTo(target: string, type: TypeSubMenu) {
        return () => navigate(`/${title.toLocaleLowerCase()}/${target.toLocaleLowerCase()}/${type.name.toLocaleLowerCase()}?type_id=${type.id}`)
    }

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
                    className="absolute left-1/2 -translate-x-1/2 overflow-hidden bg-white text-black w-max"
                >
                    {submenu.map((sub, i) => {
                        return (
                            <div key={i} className="relative text-center text-[0.9rem] font-light ">
                                <div
                                    className="text-center pt-3 text-nowrap size-full">
                                    <span className="px-3">{sub}</span>
                                    <div className="grid grid-cols-2 pt-3">
                                        {typeSubmenu.data?.data.map((type, i) => (
                                            <button
                                                key={i}
                                                className="border py-2 px-3 text-sm hover:bg-gray-200"
                                                onClick={navigateTo(sub, type)}
                                            >
                                                {type.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>
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
    const navigate = useNavigate()
    const [expand, setExpand] = React.useState(false)

    const typeSubmenu = useGetTypeSubmenu()

    function navigateTo(target: string, type: TypeSubMenu) {
        return () => {
            navigate(`/${title.toLocaleLowerCase()}/${target.toLocaleLowerCase()}/${type.name.toLocaleLowerCase()}?type_id=${type.id}`)
            window.scrollTo(0, 0)
            onCloseHeader?.()
        }
    }

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
                    return (
                        <div key={i} className="text-center text-[0.75rem] font-light border-t border-gray-200 bg-gray-100">
                            <button className="text-center py-4 size-full font-normal">
                                {sub}
                            </button>
                            <div className="grid grid-cols-2 pt-1">
                                {typeSubmenu.data?.data.map((type) => (
                                    <button
                                        key={type.id}
                                        className="border font-light py-3 hover:bg-gray-200"
                                        onClick={navigateTo(sub, type)}
                                    >
                                        {type.name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )
                })}
            </motion.div>
        </div>
    )
}
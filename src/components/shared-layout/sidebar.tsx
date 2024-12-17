import React from "react";
import { Link } from "react-router-dom";
import { RiComputerLine } from "react-icons/ri";
import { LuMap } from "react-icons/lu";
import { FaRegImages } from "react-icons/fa6";
import { MdOutlineCloudUpload } from "react-icons/md";

export default function Sidebar() {
    const [expandSubmenu, setExpandSubmenu] = React.useState<string | null>(null)

    function toggleSubmenu(submenu: string) {
        return () => {
            if (expandSubmenu === submenu) setExpandSubmenu(null)
            else setExpandSubmenu(submenu)
        }
    }

    return (
        <aside className="sticky top-0 w-auto h-dvh bg-[#185C99] z-20">
            <div className="flex flex-col">
                <div className="relative border-b border-white/30 text-white hover:bg-white hover:text-[#185C99] transition duration-200">
                    <button className="p-3 gap-1 flex flex-col justify-center items-center w-10 md:w-20" onClick={toggleSubmenu("MEDIA")}>
                        <RiComputerLine className="text-xl" />
                        <span className="text-xs font-light md:font-medium">Media</span>
                    </button>
                    {expandSubmenu === "MEDIA" && (
                        <div className="bg-gray-100 text-black rounded-r-md overflow-hidden absolute shadow-md top-3 -right-full translate-x-16 md:translate-x-8">
                            <Link to="/media/gallery">
                                <div className="flex items-center gap-2 py-3 pl-3 pr-7 hover:bg-white">
                                    <FaRegImages className="text-lg md:text-xl" />
                                    <p className="text-xs md:text-sm">Gallery</p>
                                </div>
                            </Link>
                            <Link to="/media/upload">
                                <div className="flex items-center gap-2 py-3 pl-3 pr-7 hover:bg-white">
                                    <MdOutlineCloudUpload className="text-lg md:text-xl" />
                                    <p className="text-xs md:text-sm">Upload</p>
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
                <div className="relative border-b border-white/30 text-white hover:bg-white hover:text-[#185C99] transition duration-200">
                    <button className="p-3 gap-1 flex flex-col justify-center items-center w-10 md:w-20" onClick={toggleSubmenu("MAP")}>
                        <LuMap className="text-xl" />
                        <span className="text-xs font-light md:font-medium">Map</span>
                    </button>
                    {expandSubmenu === "MAP" && (
                        <div className="bg-gray-100 text-black rounded-r-md overflow-hidden absolute shadow-md top-3 -right-full translate-x-16 md:translate-x-8">
                            <Link to="/map/gallery">
                                <div className="flex items-center gap-2 py-3 pl-3 pr-7 hover:bg-white">
                                    <FaRegImages className="text-lg md:text-xl" />
                                    <p className="text-xs md:text-sm">Gallery</p>
                                </div>
                            </Link>
                            <Link to="/map/upload">
                                <div className="flex items-center gap-2 py-3 pl-3 pr-7 hover:bg-white">
                                    <MdOutlineCloudUpload className="text-lg md:text-xl" />
                                    <p className="text-xs md:text-sm">Upload</p>
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </aside>
    )
}
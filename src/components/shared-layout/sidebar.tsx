import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RiComputerLine } from "react-icons/ri";
import { FaRegImages } from "react-icons/fa6";
import { MdOutlineCloudUpload } from "react-icons/md";

export default function Sidebar() {

    const [expand] = React.useState(true)

    const [expandSubmenu, setExpandSubmenu] = React.useState(false)

    function toggleSubmenu() { setExpandSubmenu((prev) => !prev) }

    return (
        <motion.aside
            initial={{ width: expand ? "auto" : 0 }}
            animate={{ width: expand ? "auto" : 0 }}
            transition={{ bounce: false }}
            className="sticky top-0 h-dvh bg-[#185C99] z-20"
        >
            <div className="flex flex-col gap-4">
                <div className="relative border-b border-white/30 text-white hover:bg-white hover:text-[#185C99] transition duration-200">
                    <button className="p-3 gap-1 flex flex-col justify-center items-center w-10 md:w-20" onClick={toggleSubmenu}>
                        <RiComputerLine className="text-xl" />
                        <span className="text-xs font-light md:font-medium">Media</span>
                    </button>
                    {expandSubmenu && (
                        <div className="bg-gray-100 text-black rounded-r-md overflow-hidden absolute shadow-md top-3 -right-full translate-x-16 md:translate-x-8">
                            <Link to="/admin/gallery">
                                <div className="flex items-center gap-2 py-3 pl-3 pr-7 hover:bg-white">
                                    <FaRegImages className="text-lg md:text-xl" />
                                    <p className="text-xs md:text-sm">Gallery</p>
                                </div>
                            </Link>
                            <Link to="/admin/upload">
                                <div className="flex items-center gap-2 py-3 pl-3 pr-7 hover:bg-white">
                                    <MdOutlineCloudUpload className="text-lg md:text-xl" />
                                    <p className="text-xs md:text-sm">Upload</p>
                                </div>
                            </Link>
                        </div>
                    )}
                </div>

            </div>

        </motion.aside>
    )
}
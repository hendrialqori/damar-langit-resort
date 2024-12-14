import { Link } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";
import React from "react";
import { motion } from "framer-motion";

export default function Admin() {
    const [expand, setExpand] = React.useState(false)

    function toggle() {
        setExpand((prev) => !prev)
    }

    return (
        <main className="flex">
            <motion.aside
                initial={{ width: expand ? "auto" : 0 }}
                animate={{ width: expand ? "auto" : 0 }}
                transition={{ bounce: false }}
                className="fixed overflow-hidden md:sticky top-0 h-dvh bg-blue-400"
            >
                <div className="p-2 flex flex-col gap-4">
                    <div className="flex items-center justify-between gap-2">
                        <img src="/resort-icon.png" width="30" />
                        <button className="block xl:hidden bg-white rounded-md p-2" onClick={toggle}>
                            <IoIosArrowForward />
                        </button>
                    </div>
                    <Link to="/admin">
                        <div className="flex items-center rounded-lg bg-white p-3" aria-label="">
                            <LuLayoutDashboard className="text-base md:text-xl" />
                            <div
                                // animate={{ width: expand ? "11rem" : 0, paddingLeft: expand ? "0.4rem" : 0 }}
                                className="overflow-hidden w-44 pl-2 text-xs md:text-sm font-medium">Dashboard</div>
                        </div>
                    </Link>
                </div>

            </motion.aside>
            <section className="w-full">
                <div className="p-2 border-b border-gray-200 w-full">
                    <button className="bg-slate-100 rounded-lg p-2" onClick={toggle}>
                        <GiHamburgerMenu className="text-sm md:text-xl" />
                    </button>
                </div>
                <div className="p-5 md:p-10 space-y-5">
                    <h1 className="font-semibold text-base md:text-xl">Upload Content</h1>
                    <form action="" className="flex flex-col gap-5 font-medium text-xs md:text-sm">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="image">Gambar</label>
                            <input type="file" id="image" className="bg-gray-100 px-2 py-3 rounded-lg" accept="image/*" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="image">Deskripsi</label>
                            <textarea name="" id="" cols={30} rows={10} className="bg-gray-100 p-3 rounded-lg" />
                        </div>
                        <button className="rounded-lg py-3 bg-blue-400 text-white">
                            Simpan
                        </button>
                    </form>
                </div>
            </section>
        </main>
    )
}
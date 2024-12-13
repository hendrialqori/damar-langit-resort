import { FaTwitter } from "react-icons/fa6";
import { GrFacebookOption } from "react-icons/gr";
import { FaGoogle } from "react-icons/fa";
import { FaRss } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

function SocialMedia({ children }: { children: React.ReactNode }) {
    return (
        <button className="bg-white hover:bg-[#f7c552] transition duration-200 rounded-full size-7 flex justify-center items-center">
            {children}
        </button>
    )
}

export default function Footer() {
    return (
        <footer className="relative z-[2] bg-[#373a3c]">
            <div className="w-[calc(100%_-_50px)] max-w-7xl mx-auto grid grid-cols-1 md:grid-col-2 xl:grid-cols-4 gap-10 pt-12 pb-16 text-center md:text-left">
                <div className="space-y-3">
                    <div className="flex justify-center md:justify-start items-end gap-2">
                        <h1 className="text-[#f7c552] text-xl font-bold">DAMAR LANGIT</h1>
                        <h1 className="text-white text-lg font-bold">RESORT</h1>
                    </div>
                    <p className="text-white text-xs">Copyright © 2024</p>
                </div>
                <div className="text-white space-y-5">
                    <h2 className="text-[0.9rem] font-bold">LOCATION</h2>
                    <p className="text-[0.9rem] leading-6">
                        Jl. Batu Sapi No.RT.6, RW4, Batu Layang, Kec. Cisarua, Kabupaten Bogor,
                        Bogor Jawa Barat 16750
                    </p>
                </div>
                <div className="text-white space-y-5">
                    <h2 className="text-[0.9rem] font-bold">MORE INFO</h2>
                    <div className="space-y-1">
                        <p className="text-[0.9rem]">Phone: <span className="font-light">040-040-0440</span></p>
                        <p className="text-[0.9rem]">Phone: <span className="font-light">040-040-0440</span></p>
                    </div>
                </div>
                <div className="text-white space-y-5">
                    <h2 className="text-[0.9rem] font-bold">GET SOCIAL WITH US</h2>
                    <div className="flex justify-center md:justify-start gap-2">
                        <SocialMedia>
                            <FaTwitter className="text-black text-sm" />
                        </SocialMedia>
                        <SocialMedia>
                            <GrFacebookOption className="text-black text-base" />
                        </SocialMedia>
                        <SocialMedia>
                            <FaGoogle className="text-black text-sm" />
                        </SocialMedia>
                        <SocialMedia>
                            <FaRss className="text-black text-sm" />
                        </SocialMedia>
                        <SocialMedia>
                            <FaDribbble className="text-black text-sm" />
                        </SocialMedia>
                    </div>
                </div>
            </div>
        </footer>
    )
}
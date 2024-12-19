import { IoMapSharp } from "react-icons/io5";
import { scrollInto } from "../../../utils/scroll-into";

export default function Hero() {
    return (
        <section className="min-h-dvh w-full flex justify-center items-center relative"
            style={{ backgroundImage: "url('/damar-bg.webp')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
        >
            <div className="absolute inset-0 bg-black/40" aria-label="overlay" />
            <div className="relative w-full max-w-[380px] mx-auto flex flex-col justify-center items-center gap-4" >
                {/* <img src="resort-icon.png" className="invert-[1] brightness-100" loading="lazy" height="250px" width="200px" /> */}
                <div className="flex flex-col justify-center items-center gap-3">
                    <h1 className="font-bold text-3xl space-x-3">
                        <span className="text-[#f89624]">Damar</span>
                        <span className="text-[#33c1cf]">Langit</span>
                        <span className="text-white font-medium">Resort</span>
                    </h1>
                    <p className="text-white text-center">Explorer Keindahan Alam Di Damar Langit Resort</p>
                    <button className="rounded-full px-5 py-3 bg-white flex items-center gap-2" onClick={() => scrollInto("#maps")}>
                        <IoMapSharp />
                        <span className="text-sm font-semibold">BUKA MAPS</span>
                    </button>
                </div>
            </div>
        </section>
    )
}
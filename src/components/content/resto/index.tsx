import DINING from "./dining";
import DTP from "./dtp";
import KEDAI from "./kedai";
import PAKIS from "./pakis";

export default function Resto() {
    return (
        <section className="bg-[#055650]">
            <div className="w-[calc(100%_-_50px)] max-w-7xl mx-auto py-10">
                <div className="flex items-center gap-2 md:gap-5 text-white">
                    <div className="border border-white size-10 md:size-14 flex justify-center items-center rounded-full">
                        <span className="text-2xl md:text-3xl font-bold">1</span>
                    </div>
                    <p className="text-xl md:text-2xl font-semibold">RESTO</p>
                </div>
                <div className="space-y-2 md:space-y-10">
                    <DTP />
                    <PAKIS />
                    <DINING />
                    <KEDAI />
                </div>
            </div>
        </section>
    )
}
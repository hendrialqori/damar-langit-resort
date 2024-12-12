import AMARASPA from "./amara-spa";
import AUZORAWATERFALL from "./auzora-waterfall";
import DAMARWATERFALL from "./damar-waterfall";
import SHOOTANDADVENTURE from "./shoot-and-adventure";

export default function Adventure() {
    return (
        <section className="bg-[#055650]">
            <div className="w-[calc(100%_-_50px)] max-w-7xl mx-auto py-10">
                <div className="flex items-center gap-2 md:gap-5 text-white">
                    <div className="border border-white size-10 md:size-14 flex justify-center items-center rounded-full">
                        <span className="text-2xl md:text-3xl font-bold">2</span>
                    </div>
                    <p className="text-xl md:text-2xl font-semibold">ADVENTURE</p>
                </div>
                <AUZORAWATERFALL />
                <DAMARWATERFALL />
                <AMARASPA />
                <SHOOTANDADVENTURE />
            </div>
        </section>
    )
}
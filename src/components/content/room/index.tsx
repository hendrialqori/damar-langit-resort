import TwoBedroomVilla from "./2b-villa";
import Camping from "./camping";
import Executive from "./exceutive";
import Glamping from "./glamping";
import GrandDeluxe from "./grand-deluxe";
import Superior from "./superior";
import VillaKayu from "./villa-kayu";
import VillaLumbung from "./villa-lumbung";

export default function Room() {
    return (
        <section className="bg-[#055650]">
            <div className="w-[calc(100%_-_50px)] max-w-7xl mx-auto py-10">
                <div className="flex items-center gap-2 md:gap-5 text-white">
                    <div className="border border-white size-10 md:size-14 flex justify-center items-center rounded-full">
                        <span className="text-2xl md:text-3xl font-bold">2</span>
                    </div>
                    <p className="text-xl md:text-2xl font-semibold">ROOM</p>
                </div>
                <div className="space-y-2 md:space-y-10">
                  <Camping />
                  <Superior />
                  <Glamping />
                  <VillaKayu />
                  <GrandDeluxe />
                  <Executive />
                  <TwoBedroomVilla />
                  <VillaLumbung />
                </div>
            </div>
        </section>
    )
}
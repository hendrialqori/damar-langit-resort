import React from "react";
import { motion } from "framer-motion";
import { FaMapPin } from "react-icons/fa6";
import Portal from "../../portal";

const COORDINATE = [
    {
        name: "HERITAGE",
        x: 55,
        y: 380
    },
    {
        name: "AUZORA WATERFALL",
        x: 410,
        y: 84
    },
    // {
    //     name: "ADVENTURE & RECREATION",
    //     x: 350,
    //     y: 420
    // },
    {
        name: "DAMAR WATERFALL",
        x: 510,
        y: 126
    },
    {
        name: "KEDAI",
        x: 433,
        y: 323
    },
    {
        name: "GLAMPING",
        x: 632,
        y: 326
    },
    {
        name: "VILLA KAYU",
        x: 752,
        y: 340
    },
    {
        name: "VILLA LUMBUNG",
        x: 330,
        y: 335
    },
    {
        name: "SWIMINGPOOL",
        x: 740,
        y: 480
    },
    {
        name: "CAMPING",
        x: 397,
        y: 263
    },
    {
        name: "DAMAR LANGIT DINING",
        x: 790,
        y: 421
    },
    {
        name: "PAKIS", // RAJA KOPI,
        x: 865,
        y: 455

    },
    {
        name: "DAMAR TEA & PATTISERIE",
        x: 850,
        y: 515
    }
]

const IMAGE_ON_MAP = {
    "AUZORA WATERFALL": "/ON MAP/AUZORA WATERFALL/Booklet DLR 2024_page-0033.jpg",
    "DAMAR WATERFALL": "/ON MAP/DAMAR WATERFALL/Booklet DLR 2024_page-0031.jpg",
    "DAMAR LANGIT DINING": "/ON MAP/DAMAR LANGIT DINING/damar-langit-dining.jpg",
    "DAMAR TEA & PATTISERIE": "/ON MAP/DAMAR TEA & PATTISERIE/damar-tea-pattiserie.jpg",
    "SWIMINGPOOL": "/ON MAP/SWIMINGPOOL/Booklet DLR 2024_page-0016.jpg",
    "KEDAI": "/ON MAP/KEDAI/Booklet DLR 2024_page-0028.jpg",
    "PAKIS": "/ON MAP/PAKIS/Booklet DLR 2024_page-0024.jpg",
    "GLAMPING": "/ON MAP/GLAMPING/Booklet DLR 2024_page-0007.jpg",
    "CAMPING": "/ON MAP/CAMPING/Booklet DLR 2024_page-0019.jpg",
    "VILLA LUMBUNG": "/ON MAP/VILLA LUMBUNG/images (1).jpg",
    "VILLA KAYU": "/ON MAP/VILLA KAYU/v2.jpg"
}

export default function Maps() {
    const imageWrapper = React.useRef<HTMLDivElement | null>(null)

    const [isOpen, setOpen] = React.useState(false)
    const [location, setLocation] = React.useState<string | null>(null)


    const imageSelected = React.useMemo(() => IMAGE_ON_MAP[location as keyof typeof IMAGE_ON_MAP], [location])

    // function getCoordinatePointImage(e: React.MouseEvent) {
    //     const rect = imageWrapper.current?.getBoundingClientRect()
    //     let x = 0, y = 0

    //     if (rect) {
    //         x = e.clientX - rect.left;
    //         y = e.clientY - rect.top;
    //     }

    //     alert(JSON.stringify({ x, y }))
    // }

    function selectPinImage(location: string) {
        return () => {
            setOpen(true)
            setLocation(location)
        }
    }

    function closeModal() {
        setOpen(false)
        setLocation(null)
    }

    return (
        <React.Fragment>
            <section id="maps" className="min-h-[60dvh] md:min-h-[115dvh] w-full flex justify-center items-center relative"
                style={{ backgroundImage: "url('/legend.png')", backgroundSize: "cover", backgroundPosition: "center 10px", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed" }}
            >
                <div className="overflow-auto w-auto">
                    <motion.div
                        ref={imageWrapper}
                        className="relative w-[1080px] mx-auto flex flex-col justify-center items-center scale-75"
                        // onMouseDown={getCoordinatePointImage}
                        style={{ scale: 1 }}
                    >
                        <img src="/map.png" className="size-full object-cover" loading="lazy" />
                        {COORDINATE.map(({ name, x: left, y: top }, i) => (
                            <button
                                key={i}
                                className="absolute z-1 bg-black/0 rounded-full size-10"
                                style={{ left, top }}
                                onClick={selectPinImage(name)}
                            >
                                <div className="relative size-full flex justify-center items-center -translate-y-3">
                                    <FaMapPin className="text-red-500 text-3xl" />
                                </div>
                            </button>
                        ))}

                    </motion.div>
                </div>
            </section>
            <Portal isOpen={isOpen} onClose={closeModal}>
                <img src={imageSelected} alt={imageSelected} loading="lazy" />
            </Portal>
        </React.Fragment>
    )
}
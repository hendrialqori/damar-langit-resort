import React from "react";
import { motion } from "framer-motion";
import { FaMapPin } from "react-icons/fa6";
import Portal from "../../portal";
import { useSearchParams } from "react-router-dom";
import { useGetMapImage } from "../../../services/map-service";
import { clsx as cn } from "clsx";
import { COORDINATES, IMAGE_ON_MAP } from "../../../constant";


export default function Maps() {
    const [queryParams, setQueryParams] = useSearchParams()
    const location = queryParams.get("location") ?? ""

    const imageWrapper = React.useRef<HTMLDivElement | null>(null)

    const [isOpen, setOpen] = React.useState(false)

    const imagesClient = React.useMemo(() => IMAGE_ON_MAP[location as keyof typeof IMAGE_ON_MAP], [location])

    const imagesServer = useGetMapImage(location)

    function selectPinImage(location: string) {
        return () => {
            setOpen(true)
            setQueryParams((prev) => {
                prev.set("location", location)
                return prev
            })
        }
    }

    function closeModal() {
        setOpen(false)
        setQueryParams((prev) => {
            prev.delete("location")
            return prev
        })
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
                        {COORDINATES.map(({ name, x: left, y: top }, i) => (
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
                <GridColumn>
                    {imagesClient?.map((image, i) => (
                        <Image key={i} src={image} alt={image} />
                    ))}
                    {imagesServer.data?.data.map((image) => (
                        <Image key={image.id} src={image.cloudUrl} alt={image.cloudUrl} />
                    ))}
                </GridColumn>
            </Portal>
        </React.Fragment>
    )
}

function GridColumn(props: { children: React.ReactNode }) {
    const lenghtChild = React.Children.count(props.children)

    if (!lenghtChild) return <p className="text-white">Gambar tidak tersedia</p>

    return (
        <div className={cn(
            "grid gap-3",
            lenghtChild > 1 ? "grid grid-cols-1 md:grid-cols-2" : ""
        )}>
            {props.children}
        </div>
    )
}

function Image(props: { src: string; alt: string }) {
    return <img {...props} loading="lazy" />
}


// function getCoordinatePointImage(e: React.MouseEvent) {
//     const rect = imageWrapper.current?.getBoundingClientRect()
//     let x = 0, y = 0

//     if (rect) {
//         x = e.clientX - rect.left;
//         y = e.clientY - rect.top;
//     }

//     alert(JSON.stringify({ x, y }))
// }
import { useParams } from "react-router-dom"
import Layout from "../../components/layout";
import { MENUS } from "../../constant"

export default function Menu() {
    const { submenu } = useParams()

    const images = MENUS[submenu as keyof typeof MENUS]

    return (
        <Layout>
            <section className="bg-[#055650]"
                style={{ backgroundImage: "url('/resort-bg.webp')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
            >
                <div className="bg-black/40">
                    <div className="relative z-1 w-[calc(100%_-_50px)] max-w-7xl mx-auto space-y-5 md:space-y-10 pt-24 md:pt-40 pb-24">
                        <h1 className="text-white font-bold text-lg md:text-2xl text-center">{submenu?.toLocaleUpperCase()}</h1>
                        <div className="flex flex-wrap justify-center items-start gap-2">
                            {images.map((image) => (
                                <img src={image} alt={`${submenu}-image`} className="w-full md:w-1/3 rounded-2xl" loading="lazy" />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
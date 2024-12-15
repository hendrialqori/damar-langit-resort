import { useParams } from "react-router-dom"
import Layout from "../../components/layout";
import { useGetImages } from "../../services/menu-service";
import { IMAGES } from "../../constant";

export default function Menu() {
    const { menu, submenu, type } = useParams()

    const imagesClient = IMAGES[submenu as keyof typeof IMAGES][type as "arabic" | "national"]
    const imagesServer = useGetImages({ menu: String(menu), submenu: String(submenu), type: String(type) })
    
    return (
        <Layout>
            <section className="bg-[#055650]"
                style={{ backgroundImage: "url('/damar-bg.webp')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
            >
                <div className="bg-black/40">
                    <div className="relative z-1 w-[calc(100%_-_50px)] max-w-7xl mx-auto space-y-5 md:space-y-10 pt-24 md:pt-40 pb-24">
                        <h1 className="text-white font-bold text-lg md:text-2xl text-center">{menu?.toLocaleUpperCase()} - {submenu?.toLocaleUpperCase()} - {type?.toLocaleUpperCase()}</h1>
                        <div className="flex flex-wrap justify-center items-start gap-2">
                            {imagesClient.map((image, i) => (
                                <img key={i} src={image} alt={`${submenu}-image`} className="w-full md:w-1/3 rounded-2xl" loading="lazy" />
                            ))}
                            {imagesServer.data?.data.map((image, i) => (
                                <img key={i} src={image.cloudUrl} alt={`${submenu}-image`} className="w-full md:w-1/3 rounded-2xl" loading="lazy" />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
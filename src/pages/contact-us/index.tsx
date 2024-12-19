import Layout from "#/components/layout";
import { FaWhatsapp } from "react-icons/fa6";

export default function ContactUs() {
    return (
        <Layout>
            <section className="bg-[#055650]"
                style={{ backgroundImage: "url('/damar-bg.webp')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}
            >
                <div className="bg-black/40 pb-20">
                    <div className="relative z-1 w-[calc(100%_-_50px)] max-w-7xl mx-auto space-y-5 md:space-y-10 pt-24 md:pt-40 pb-24">
                        <h1 className="text-white font-bold text-lg md:text-2xl text-center">CONTACT US</h1>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                            <div className="space-y-3 bg-white rounded-lg w-max p-5" aria-label="card">
                                <h2 className="font-medium text-lg">Admin 1</h2>
                                <p className="font-medium">+62 251 8260424</p>
                                <div className="invisible flex items-center px-10 gap-2 bg-[#25D366] text-white rounded-md py-2">
                                    <FaWhatsapp />
                                    <p>Chat lewat whatsapp</p>
                                </div>
                            </div>
                            <a href="https://wa.me/+6285710670509" target="_blank">
                                <div className="space-y-3 bg-white rounded-lg w-max p-5" aria-label="card">
                                    <h2 className="font-medium text-lg">Admin 2</h2>
                                    <p className="font-medium">+62 857-1067-0509</p>
                                    <div className="flex items-center px-10 gap-2 bg-[#25D366] text-white rounded-md py-2">
                                        <FaWhatsapp />
                                        <p>Chat lewat whatsapp</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}
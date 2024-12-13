import Galleries from "../../components/content/galleries";
import Hero from "../../components/content/hero";
import Maps from "../../components/content/maps";
import Layout from "../../components/layout";

export default function Home() {
    return (
        <Layout>
            <Hero />
            <Galleries />
            <Maps />
        </Layout>
    )
}
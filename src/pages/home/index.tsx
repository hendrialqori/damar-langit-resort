import Layout from "#/components/layout";
import Hero from "./modules/hero";
import Maps from "./modules/map";

export default function Home() {
    return (
        <Layout>
            <Hero />
            <Maps />
        </Layout>
    )
}
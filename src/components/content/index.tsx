import Adventure from "./adventure";
import Galleries from "./galleries";
import Hero from "./hero";
import Maps from "./maps";
import Resto from "./resto";
import Room from "./room";

export default function Content() {
    return (
        <>
            <Hero />
            <Galleries />
            <Resto />
            <Room />
            <Adventure />
            <Maps />
        </>
        
    )
}
export default function Maps() {
    return (
        <section id="maps" className="min-h-[60dvh] md:min-h-[115dvh] w-full flex justify-center items-center relative"
            style={{ backgroundImage: "url('/legend.png')", backgroundSize: "cover", backgroundPosition: "center 10px", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed" }}
        >
            <div className="relative w-[calc(100%_-_50px)] mx-auto flex flex-col justify-center items-center" >
                <img src="/3D-maps.png" className="object-contain w-[110%] md:w-[70%]" loading="lazy" />
            </div>
        </section>
    )
}
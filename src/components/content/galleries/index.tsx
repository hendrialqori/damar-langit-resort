const gallaries = Array.from({ length: 30 }).map((_, i) => i + 1)

export default function Galleries() {
    return (
        <section className="w-[calc(100%_-_50px)] max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 py-10">
            {gallaries.map((imageIndex) => (
                <img key={imageIndex} src={`/galleries/Ala Carte_Sepetember-images-${imageIndex}.jpg`} loading="lazy" />
            ))}
        </section>
    )
}
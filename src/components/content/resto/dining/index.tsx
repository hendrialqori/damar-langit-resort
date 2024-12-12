export default function DINING() {
    return (
        <div id="DINING" className="py-10 space-y-5">
            <div className="w-max mx-auto flex flex-col justify-center items-center">
                <div className="h-1 w-10 bg-white" />
                <p className="text-xl md:text-3xl font-bold text-white">DINING</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3" aria-label="dining-gallery">
                <img src="/RESTO/DINING/ARABIC/1. Arabian Promo (2).jpg" alt="dining-image" loading="lazy" />
                <img src="/RESTO/DINING/NATIONAL/images (1).jpg" alt="dining-image" loading="lazy" />
            </div>
        </div>
    )
}
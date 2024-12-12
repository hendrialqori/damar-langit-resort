export default function Camping() {
    return (
        <div id="CAMPING" className="py-10 space-y-5">
            <div className="w-max mx-auto flex flex-col justify-center items-center">
                <div className="h-1 w-10 bg-white" />
                <p className="text-xl md:text-3xl font-bold text-white">CAMPING</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3" aria-label="CAMPING-gallery">
                <img src="/ROOM/CAMPING/ARABIC/FLYER ROOM _ ARABIC (1)_page-0001.jpg" alt="CAMPING-image" loading="lazy" />
                <div className="">
                    <img src="/ROOM/CAMPING/NATIONAL/DSC07214.jpg" alt="CAMPING-image" loading="lazy" />
                    <img src="/ROOM/CAMPING/NATIONAL/WhatsApp Image 2024-10-30 at 09.16.08 (2).jpeg" alt="CAMPING-image" loading="lazy" />
                </div>
            </div>
        </div>
    )
}
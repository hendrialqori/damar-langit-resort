import { CgSpinner } from "react-icons/cg";

export function Page() {
    return (
        <main className="absolute inset-0 flex justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-3">
                <img src="/resort-icon.png" alt="icon" width={60} loading="lazy" />
                <div className="flex justify-center items-center gap-2">
                    <CgSpinner className="text-xl animate-spin" />
                    <span className="font-medium text-sm">Memuat halaman...</span>
                </div>
            </div>
        </main>
    )
}
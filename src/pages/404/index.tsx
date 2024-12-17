import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <main className="absolute inset-0 flex justify-center items-center">
            <div className="flex flex-col gap-2 justify-center items-center">
                <p className="font-medium">404 | Page not found</p>
                <Link to="/">
                    <p className="underline">Kembali ke home</p>
                </Link>
            </div>
        </main>
    )
}
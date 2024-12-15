import Sidebar from "./sidebar";

interface Props { children: React.ReactNode }

export default function SharedLayout({ children }: Props) {
    return (
        <main className="flex">
            <Sidebar />
            <section className="w-full p-3 md:p-7">
                {children}
            </section>
        </main>
    )
}
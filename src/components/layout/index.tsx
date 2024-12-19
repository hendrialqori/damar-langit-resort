import Footer from "./modules/footer"
import Header from "./modules/header"

interface Props { children: React.ReactNode }

export default function Layout({ children }: Props) {
    return (
        <main>
            <Header />
            {children}
            <Footer />
        </main>
    )
}
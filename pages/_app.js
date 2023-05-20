import PgHeader from "../components/Header/header"
import '../styles/globals.css'
import { Roboto } from 'next/font/google'
import Footer from "../components/Footer Components/footer";

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400'],
});

export default function App({ Component, pageProps}) {
    return(
        <main className={roboto.className}>
            
            <PgHeader/>

            <Component {...pageProps} />
            
            <Footer />
            
        </main>
    )
}
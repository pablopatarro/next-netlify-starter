import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Mi primera app con Next JS</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Header title="Esta es una prueba de como se hace integración del código desde GitHub" />
                <p className="description">
                    Vamos a tener que trabajar mucho para aprender Next.js...
                </p>
            </main>

            <Footer />
        </div>
    )
}

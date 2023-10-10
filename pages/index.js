import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>Esta es una prueba para ver si haciendo push desde VSCode se actualiza la página</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Header title="Welcome to my app!" />
                <p className="description">
                    Vamos a tener que trabajar mucho para aprender Next.js...
                </p>
            </main>

            <Footer />
        </div>
    )
}

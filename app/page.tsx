import Image from 'next/image'
import Header from "@/app/pages/Header";
import Footer from "@/app/pages/Footer";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <Header />
        <Footer />
    </main>
  )
}

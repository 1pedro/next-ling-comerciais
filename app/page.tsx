/* eslint-disable react/jsx-key */

'use client'
import Navbar from '@/components/navbar'
import Home1 from '@/components/home1'
import Catalogo from '@/components/catalogo'
import Head from 'next/head'
import data from "../dados.json"
import Footer from '../components/footer'
import Services from '../components/services'
import {RecoilRoot} from "recoil";

export default function Page() {
    return (
        <RecoilRoot>
            <>
                <Head>
                    <title>FoodStiks</title>
                    <meta name="description" content="Generated by create next app"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                <main className='bg-yellow-200'>
                    <div>
                        <Navbar/>
                        <Home1/>
                        <div className='bg-red-600'>
                            <h1 className='text-center text-5xl text-white p-8 uppercase font-bold '>Confira nosso
                                cardápio!</h1>
                            <div className='grid grid-cols-3 gap-5 '>
                                {data.map(product => < Catalogo product={product} key={product.id}/>)}
                            </div>
                        </div>

                    </div>
                    <Services/>
                    <Footer/>
                </main>

            </>
        </RecoilRoot>

    )
}

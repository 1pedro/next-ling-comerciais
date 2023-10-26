'use client'

import React from 'react';
import Head from "next/head";
import Navbar from "@/components/Navbar";

import Hero from "@/components/Hero";
import Catalog from "@/components/Catalog";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

import products from "../dados.json"


function Page() {
    return (
        <>
            <Head>
                <title>FoodStiks</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/app/favicon.ico"/>
            </Head>
            <main className='bg-yellow-200'>
                <div>
                    <Navbar/>
                    <Hero/>
                    <div className='bg-red-600'>
                        <h1 className='text-center text-5xl text-white p-8 uppercase font-bold '>Confira nosso
                            cardápio!</h1>
                        <div className='grid grid-cols-3 gap-5 '>
                            {products.map(product => <Catalog product={product} key={product.id}/>)}
                        </div>
                    </div>
                </div>
                <Services/>
                <Footer/>
            </main>
        </>
    );
}

export default Page;

'use client'

import React from 'react';
import Image from 'next/image';
import {useRecoilState} from 'recoil'
import {CartContext} from '@/context/CartContext'
import toast from 'react-hot-toast';
import {Product} from "@/app/type";

const Catalog = ({product}: { product: Product }) => {

    const [cartItems, setCartItems] = useRecoilState(CartContext)

    const addToCart = () => {
        if (cartItems.findIndex(pro => pro.id === product.id) === -1) {
            setCartItems(prevState => [...prevState, product])
        } else {
            setCartItems(prevState => {
                return prevState.map((item) => {
                    return item.id === product.id ? {...item, quantidade: item.quantidade + 1} : item
                })
            })
        }
        toast(`${product.name} added to cart`)
    }


    return <div className='flex justify-center'>
        <div className='w-72 p-4 bg-yellow-200 m-8'>
            <Image src={product.image} alt="" width={600} height={600}/>
            <div>
                <h1 className='text-center p-1 font-bold text-3xl'>{product.name}</h1>
                <h3 className='text-justify'>{product.text}</h3>
                <p className='text-center font-bold p-1'>{product.price}</p>
                <button className='bg-red-700 mx-auto block p-1 text-yellow-200' onClick={addToCart}>
                    Adicionar compra
                </button>
            </div>
        </div>
    </div>


}

export default Catalog

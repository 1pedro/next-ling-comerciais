'use client'

import React from 'react';
import Image from 'next/image';
import {useRecoilState} from 'recoil'
import {carroState} from '@/portas/carroState'

import toast from 'react-hot-toast';
import {Product} from "@/app/type";

const Catalogo = ({product}: { product: Product }) => {


    const [carrinhoItem, setCarrinhoItem] = useRecoilState(carroState)

    const AdicionarCarrinho = () => {
        if (carrinhoItem.findIndex(pro => pro.id === product.id) === -1) {
            setCarrinhoItem(prevState => [...prevState, product])
        } else {
            setCarrinhoItem(prevState => {
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
                <button className='bg-red-700 mx-auto block p-1 text-yellow-200' onClick={AdicionarCarrinho}> Adicionar
                    compra
                </button>
            </div>
        </div>
    </div>


}

export default Catalogo

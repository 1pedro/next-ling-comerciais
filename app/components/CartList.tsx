'use client'

import React from 'react';
import Image from 'next/image'
import {Product} from "@/app/type";

const CartList = ({product}: { product: Product }) => {
    const {name, image, quantidade, price} = product

    return (
        <div>
            <div className='bg-yellow-200 max-w-[800px] mx-auto pt-24 px-6 flex gap-3 items-center justify-between'>
                <Image width={200} height={300} src={image} alt="" className='p-2'/>

                <div>
                    <div className='font-bold text-2xl'>{name}</div>
                    <div>Quantidade: {quantidade}</div>
                </div>
                <div className='text-3xl font-bold'>${price * quantidade}</div>
            </div>
        </div>
    )
}
export default CartList

'use client'
import React from 'react';
import Image from 'next/image';
import logo from '../public/assets/icon_pizza.png';
import whats from '../public/assets/whats.png';
import Link from 'next/link';
import {BsCart} from 'react-icons/bs'
import {carroState} from '@/portas/carroState';
import {useRecoilState} from 'recoil'

const Navbar = () => {

    const [carrinhoItem] = useRecoilState(carroState)
    return (
        <div
            className='bg-red-700 h-16 w-full flex text-white items-center justify-around gap-24 p-12 text-center fixed'>
            <div className='flex items-center justify-center '>
                <Image src={logo} alt="logo" width={50} height={50}/>
                <h1 className='text-white text-4xl'>FoodStiks</h1>
            </div>
            <div>
                <ul className='flex items-center justify-center gap-24'>
                    <li className='text-base font-bold'>
                        <Link href="/">Sobre</Link></li>
                    <li className='text-base font-bold'><Link href="/">Cardápio</Link></li>
                    <li className='text-lg font-bold'><Link href="/">Serviços</Link></li>
                </ul>
            </div>
            <div>
                <button className='bg-yellow-200 text-black rounded-2xl text-base w-32 p-1	'><Link
                    href="/login">Login</Link></button>
            </div>
            <div className='flex items-center justify-center gap-2'>
                <Image src={whats} alt="" width={30}/>
                <p>000000000</p>
            </div>
            <div className='relative cursor-pointer'>
                <Link href="/cart">
                    <div>
                        <BsCart size={35}/>
                        <span
                            className='absolute -top-2 -right-2 text[11px] bg-white h-[22px] w-[22px] rounded-full grid place-items-center text-black'>{carrinhoItem.length}</span>
                    </div>
                </Link>
            </div>
        </div>)

}
export default Navbar

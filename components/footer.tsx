'use client'

import Image from 'next/image'
import logo from '../public/assets/icon_pizza.png'
import insta from '../public/assets/instagram.png'

const Footer = () => {
    return <div className='bg-red-700 text-white flex align-center justify-between p-1'>
        <div className='flex items-center justify-center gap-2'><Image src={logo} alt=""/>
            <p>Todos os direitos reservados FoodStiks</p></div>
        <div className='flex items-center justify-center'>
            <p>CNPJ: 000000000000000</p>
        </div>
        <div className='flex items-center justify-center pr-4'>
            <Image src={insta} alt="" width={40}/>
        </div>
    </div>
}
export default Footer

'use client'

import Image from 'next/image'
import bar from '../public/assets/bars.jpg'
import sobremesa from '../public/assets/sobremesa.jpg'
import pay from '../public/assets/pagamento.jpg'

const Services = () => {
    return <div className='bg-yellow-300'>
        <h1 className='text-center text-5xl text-black p-8 uppercase font-bold '>Confira nosso cardápio!</h1>
        <div className='flex gap-16 p-12'>
            <div className='w-[480px] bg-red-700'>

                <Image src={bar} alt=""/>
                <h1 className='bg-yellow-200 text-center font-bold p-2 text-[23px]'>Variedades de Bebidas</h1>
                <p className='p-3 text-justify text-white text-[18px]'>A FoodStiks possui no seu restaurante um bar com
                    diversas variedades de bebidas alcoólicas e não alcoólicas para atender todos os públicos.</p>
            </div>
            <div className='w-[480px] bg-red-700 text'>
                <Image src={sobremesa} alt=""/>
                <h1 className='bg-yellow-200 text-center font-bold p-2 text-[23px]'>Sobremesas</h1>
                <p className='p-3 text-justify text-white text-[18px]'>Nosso restaurante trabalha com diversas
                    sobremesas , de diversos sabores para nossos clientes consumirem após a refeição.</p>
            </div>
            <div className='w-[480px] bg-red-700'>
                <Image src={pay} alt=""/>
                <h1 className='bg-yellow-200 text-center font-bold p-2 text-[23px]'>Pagamento</h1>
                <p className='p-3 text-justify text-white text-[18px]'>Nosso restaurante aceita diversas formas de
                    pagamento, sendo elas: dinheiro , cartão de crédito , cartão de débito e PIX.</p>
            </div>
        </div>
    </div>
}

export default Services

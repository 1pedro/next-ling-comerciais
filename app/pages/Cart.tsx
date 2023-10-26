'use client'
import React from 'react';
import Navbar from '@/app/components/Navbar';
import {useRecoilState} from 'recoil'
import {CartContext} from '../context/CartContext';
import CartList from '../components/CartList'

const Cart = () => {

    const [cartItem, _] = useRecoilState(CartContext)

    const totalPrice = () => {
        let total = 0
        cartItem.forEach(item => total += (item.price * item.quantidade))
        return total
    }

    return <div>
        <Navbar/>

        <div className='container mx-auto'>
            {cartItem.length <= 0
                ? <h1 className='text-black text-ls'>Seu carrinho não possui nenhum item
                    adicionado</h1> : cartItem.map(item => <CartList key={item.id} product={item}/>)
            }

            {cartItem.length > 0 && (<div className='max-w-[800px] mx-auto mt-4'>
                <h2 className='text-right text-2xl font-bold'>Total: ${totalPrice()}</h2>
                <button className='text-right text-white py-3 px-10 mt-6 block mx-auto bg-red-600 rounded-xl font-bold'
                        onClick={() => {
                        }}>Comprar
                </button>
            </div>)}
        </div>
    </div>
}
export default Cart

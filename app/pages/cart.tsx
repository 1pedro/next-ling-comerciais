'use client'
import React from 'react';
import Navbar from '@/components/navbar';
import {useRecoilState} from 'recoil'
import {carroState} from '../../portas/carroState';
import ListaCarrinho from '../../components/ListaCarrinho'

const Carrinho = () => {

    const [carrinhoItem, setCarrinhoItem] = useRecoilState(carroState)

    const PrecoTotal = () => {
        let total = 0
        carrinhoItem.forEach(item => total += (item.price * item.quantidade))
        return total
    }
    const ConferindoItens = () => {

    }

    return <div>
        <Navbar/>

        <div className='container mx-auto'>
            {carrinhoItem.length <= 0
                ? <h1 className='text-black text-ls'>Seu carrinho não possui nenhum item
                    adicionado</h1> : carrinhoItem.map(item => <ListaCarrinho key={item.id} data={item}/>)
            }

            {carrinhoItem.length > 0 && (<div className='max-w-[800px] mx-auto mt-4'>
                <h2 className='text-right text-2xl font-bold'>Total: ${PrecoTotal()}</h2>
                <button className='text-right text-white py-3 px-10 mt-6 block mx-auto bg-red-600 rounded-xl font-bold'
                        onClick={ConferindoItens}>Comprar
                </button>
            </div>)}
        </div>
    </div>
}
export default Carrinho

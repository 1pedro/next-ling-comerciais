import React from 'react';
import Image from "next/image";

import { Dancing_Script, Inclusive_Sans } from 'next/font/google'

const font = Dancing_Script({ subsets: ['latin'] })


function Header(props: any) {
    return (
        <div className={`w-full p-5 text-center text-white font-bold bg-red-600 text-5xl h-[120px] flex justify-between ${font.className}`}>
            <Image
                src="/pizza.png"
                alt="Pizza"
                width={110}
                style={{ width: 110}}
            />
            <h1>Sistemas de Pedidos</h1>
            <h2>+ 71 123 456 789</h2>
        </div>
    );
}

export default Header;

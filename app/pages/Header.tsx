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
            <ul>
                <li>AB</li>
                <li>B</li>
                <li>C</li>
                <li>D</li>
                <li>E</li>

            </ul>
        </div>
    );
}

export default Header;

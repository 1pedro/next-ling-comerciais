import React from 'react';

import { Dancing_Script, Inclusive_Sans } from 'next/font/google'

const font = Dancing_Script({ subsets: ['latin'] })
const textFont = Inclusive_Sans({weight: "400", subsets: ['latin']})

function Footer(props) {
    return (
        <div className={'w-full p-10 text-white bg-zinc-600  h-[300px] flex flex-col'}>
            <h2 className={`text-4xl ${font.className} `}>Sistemas de Pedidos</h2>
            <p className={`text-md ${textFont.className}`}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  <br/>
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                <br/>
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

        </div>
    );
}

export default Footer;

'use client'

import React from 'react';
import {RecoilRoot} from "recoil";
import {Toaster} from "react-hot-toast";
import './globals.css'


function Body({children}: { children: React.ReactNode }) {
    return (
        <RecoilRoot>
            <Toaster position='bottom-center'/>
            <body style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>{children}</body>
        </RecoilRoot>
    );
}

export default Body;

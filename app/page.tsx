'use client'
import './globals.css'
import data from "../dados.json"
import {RecoilRoot} from "recoil";
import {Toaster} from "react-hot-toast";
import Home from "@/app/pages/Home";

export default function Page() {
    return (
        <RecoilRoot>
            <Toaster position='bottom-center'/>
            <Home products={data}/>
        </RecoilRoot>
    )
}

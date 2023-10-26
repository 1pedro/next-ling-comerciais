'use client'
import {atom} from "recoil"
import {Product} from "@/app/type";

export const carroState = atom(
    {
        key: "carroSate",
        default: [] as Product []
    }
)

'use client'

import React, {FormEvent} from "react";
import {login} from "@/firebase/auth";
import {useRouter} from 'next/navigation'
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";

function Page() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const router = useRouter()

    const handleForm = async (event: FormEvent) => {
        event.preventDefault()

        const {result, error} = await login(email, password);

        if (error) {
            return console.log(error)
        }

        // else successful
        console.log(result)
        return router.push("/admin")
    }
    return (<div>
            <Navbar/>

            <Main>
                <div className="w-1/3 mx-auto ">
                    <h1 className="mt-40 font-bold text-2xl text-zinc-700">Login</h1>
                    <form onSubmit={handleForm} className="form">
                        <label htmlFor="email">
                            <p className={"font-bold text-zinc-700"}>Email</p>
                            <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email"
                                   id="email"
                                   placeholder="example@mail.com" className={"w-full py-2 px-4 rounded-lg text-lg"}/>
                        </label>
                        <label htmlFor="password" className={"w-full"}>
                            <p className={"font-bold text-zinc-700"}>Senha</p>
                            <input onChange={(e) => setPassword(e.target.value)} required type="password"
                                   name="password"
                                   id="password" placeholder="senha" className={"w-full py-2 px-4 rounded-lg text-lg"}/>
                        </label>
                        <button type="submit"
                                className={"bg-red-700 rounded-lg py-2 px-4 block w-full text-white font-bold mt-2"}>Entrar
                        </button>
                    </form>
                </div>
            </Main>


        </div>
    );
}

export default Page;

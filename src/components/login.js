import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
const login = ()=>{

return (
 <section className="flex items-stretch min-h-screen text-white ">
        <div className="relative items-center hidden w-1/2 bg-gray-500 bg-no-repeat bg-cover lg:flex">
            <div className="absolute inset-0 z-0 bg-black opacity-60"></div>
            <div className="z-10 w-full px-24">
                <h1 className="text-5xl font-bold tracking-wide text-left">Plataforma de control de acceso</h1>
                <p className="my-4 text-3xl"> </p>
            </div>
        </div>
        <div className="z-0 flex items-center justify-center w-full px-0 text-center lg:w-1/2 md:px-16">
            <div className="absolute inset-0 z-10 items-center bg-gray-500 bg-no-repeat bg-cover lg:hidden">
                <div className="absolute inset-0 z-0 bg-black opacity-60"></div>
            </div>
            <div className="z-20 w-full py-6">

                <form action="" className="w-full px-4 mx-auto sm:w-2/3 lg:px-0">
                    <div className="pt-4 pb-2">
                        <input type="email" name="email" id="email" placeholder="Email" className="block w-full p-4 text-lg bg-black rounded-sm"/>
                    </div>
                    <div className="pt-4 pb-2">
                        <input className="block w-full p-4 text-lg bg-black rounded-sm" type="password" name="password" id="password" placeholder="Password"/>
                    </div>
                    <div className="text-right text-gray-400 hover:underline hover:text-gray-100">
                        <a href="#">No recuerdo mi contraseña</a>
                    </div>
                    <div className="px-4 pt-4 pb-2">
                        <button className="block w-full p-4 text-lg uppercase bg-indigo-500 rounded-full hover:bg-indigo-600 focus:outline-none">Entrar</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
)
}

export default login
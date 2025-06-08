"use client";

import Abrigos from "@/components/abrigos/page";
import BotaoVoltar from "@/components/botaoVoltar/page";
import Link from "next/link";


export default function PaginaAbrigos() {
    return (
        <div className="bg-[#EFEFEF] max-h-screen">
            <header className="bg-gradient-to-b from-[#FA3A00] to-[#FF7F00]">
                <div className="pt-8 pl-5">
                    <Link href="/TelaPrincipal">
                        <BotaoVoltar />
                    </Link>
                </div>
                <div className="flex flex-row justify-center items-center ml-6">
                    <img src="Shelter.png" alt="Imagem de Fundo de Abrigos" className="w-[78px] h-[79px]">

                    </img>
                    <div className="w-[60%]">
                        <h1 className="text-white text-2xl leading-8 text-left ml-6 mt-8 mb-5 font-bold text-shadow-neutral-600 text-shadow-sm">Abrigos<br></br>Temporários</h1>
                    </div>
                </div>
            </header>
            <Abrigos />
        </div>
    )
}
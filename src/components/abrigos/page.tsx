'use client';

import Link from "next/link";

function CardAbrigo({ nome, imagem, capacidade, local, status, link }: any) {
    return (
        <Link href={link}>
            <div className="bg-white shadow-md shadow-neutral-600 m-8 rounded-xl cursor-pointer relative">
                <div className="flex justify-end">
                    <p className="absolute bg-[#FD7014] text-white text-[10px] rounded-2xl px-2 py-1 mt-[25%] mr-2">{status}</p>
                </div>
                <div className="flex flex-col">
                    <img src={imagem} alt="Imagem de Fundo" className="object-cover w-full" />
                    <div className="text-[11px]">
                        <h1 className="text-black text-[16px] text-left mb-2 p-3">{nome}</h1>
                        <div className="flex flex-row justify-around w-[80%] mb-8">
                            <div className="flex flex-row items-center text-[#FD8F47] border-[#FD8F47] border-2 rounded-xl px-2 py-1">
                                <img src="Person.png" alt="" className="h-[17px] w-[17px]" />
                                <p>{capacidade}</p>
                            </div>
                            <div className="flex flex-row items-center text-[#FD8F47] border-[#FD8F47] border-2 rounded-xl px-2 py-1">
                                <img src="location.png" alt="" />
                                <p>{local}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default function Abrigos() {
    const abrigos = [
        {
            nome: "Abrigo no Ginásio Tesourinha",
            imagem: "abrigoginasio.png",
            capacidade: "500 pessoas",
            local: "Porto Alegre",
            status: "Disponível",
            link: "/Abrigos/tesourinha"
        },
        {
            nome: "Abrigo Centro de Eventos FIERGS",
            imagem: "abrigoFiergs.png",
            capacidade: "1200 pessoas",
            local: "Porto Alegre",
            status: "Quase lotado",
            link: "/Abrigos/fiergs"
        }
    ];

    return (
        <div>
            <section className="bg-[#EFEFEF] min-h-screen">
                {abrigos.map((abrigo, index) => (
                    <CardAbrigo
                        key={index}
                        nome={abrigo.nome}
                        imagem={abrigo.imagem}
                        capacidade={abrigo.capacidade}
                        local={abrigo.local}
                        status={abrigo.status}
                        link={abrigo.link}
                    />
                ))}
            </section>
        </div>
    );
}

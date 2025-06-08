'use client';

import Image from "next/image";
import BotaoVoltar from "@/components/botaoVoltarLaranja/page";
import Link from "next/link";

interface Notificacao {
    titulo: string;
    descricao: string;
    imagem: string;
}

const notificacoes: Notificacao[] = [
    {
        titulo: "Pronto para retirar!",
        descricao: "Seu pedido #20231 está pronto para ser retirado",
        imagem: "/pronto.png",
    },
    {
        titulo: "Nova Campanha Contra Enchentes!",
        descricao: "Campanha solidária para ajudar famílias afetadas por enchentes",
        imagem: "/campanha.png",
    },
    {
        titulo: "Novos Postos de Doações Ativados",
        descricao: "Adicionamos novos pontos de doação em regiões estratégicas",
        imagem: "/novosPostos.png",
    },
];

export default function Notificacoes() {
    return (
        <div className="min-h-screen bg-[#EFEFEF]">
            <div className="mb-4 px-4 pt-10 pb-6">
                <Link href="/TelaPrincipal">
                    <BotaoVoltar />
                </Link>
                <h1 className="text-2xl font-bold text-[#DC5802] mb-6">Notificações</h1>
            </div>



            <div className="flex flex-col gap-4">
                {notificacoes.map((n, index) => (
                    <div
                        key={index}
                        className="bg-[#D9D9D9] p-3 flex items-center gap-4 shadow-md text-left"
                    >
                        <Image
                            src={n.imagem}
                            alt={n.titulo}
                            width={64}
                            height={64}
                            className="rounded-md object-cover"
                        />

                        <div className="flex-1">
                            <h2 className="text-sm font-bold text-black mb-1">{n.titulo}</h2>
                            <p className="text-sm text-gray-700">{n.descricao}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

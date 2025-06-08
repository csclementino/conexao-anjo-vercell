'use client';

import BotaoVoltar from "@/components/botaoVoltarLaranja/page";
import Image from "next/image";
import Link from "next/link";

export default function Emergencia() {
    const cards = [
        {
            titulo: "Apoio Psicológico",
            descricao:
                "Escuta e orientação emocional para vítimas de desastres, oferecido por profissionais voluntários ou cadastrados.",
            rota: "/Psicologos",
        },
        {
            titulo: "Defesa Civil",
            descricao:
                "Se você foi vítima de algum desastre (como alagamentos, deslizamentos, etc...), entre em contato com a Defesa Civil",
            rota: "/DefesaCivil",
        },
        {
            titulo: "Perdeu seus Documentos?",
            descricao:
                "Perdeu documentos em um desastre? É possível pedir segunda via gratuita com reconhecimento da Defesa Civil.",
            rota: "/PerdeuDocumentos",
        },
    ];

    return (
        <div className="bg-white min-h-screen">
            <div className="py-10 pl-5">
                <Link href="/TelaPrincipal">
                    <BotaoVoltar />
                </Link>
            </div>

            <div className="flex flex-col items-center gap-4">
                <Image src="/emergenciaIcone.png" alt="Icone Emergencia" width={80} height={80} />
                <h1 className="text-2xl font-bold text-[#DC5802] mb-6">Emergência</h1>
            </div>

            <div className="flex flex-col gap-4 bg-[#FD8F47] py-10 px-4 text-left rounded-t-4xl">
                {cards.map((card, index) => (
                    <Link key={index} href={card.rota}>
                        <div className="rounded-xl p-4 shadow-md bg-white hover:bg-orange-50 transition cursor-pointer">
                            <h2 className="text-lg font-bold text-[#FD7014] mb-2">{card.titulo}</h2>
                            <p className="text-sm text-black">{card.descricao}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

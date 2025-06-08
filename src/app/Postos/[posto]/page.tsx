'use client'

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const postos = {
    "cruz-vermelha": {
        nome: "Cruz Vermelha Brasileira",
        descricao: "A Cruz Vermelha realiza campanhas de arrecadação e distribuição de alimentos, produtos de higiene e limpeza para pessoas em situação de vulnerabilidade.",
        endereco: "Av. Moreira Guimarães, 699 - Indianópolis, São Paulo - SP, 04074-031",
        horario: "Segunda a sexta-feira, das 8h às 17h",
        telefone: "(11) 5056-8665",
        imagem: "/cruz-vermelha.png",
    },
    "mesa-brasil": {
        nome: "Mesa Brasil SESC",
        descricao: "Programa de combate à fome que recolhe doações de alimentos e distribui para ONGs e comunidades carentes.",
        endereco: "R. Domingos de Morais, 2.454 - Vila Mariana, São Paulo - SP, 04036-100",
        horario: "Segunda a sábado, das 7h às 16h",
        telefone: "(11) 5080-3000",
        imagem: "/mesa-brasil-icon.jpeg",
    },
    "acao-cidadania": {
        nome: "Ação Cidadania",
        descricao: "ONG que realiza campanhas de doação de alimentos e distribuição para comunidades carentes.",
        endereco: "Av. Barão de Tefé, 75 - Saúde, Rio de Janeiro - RJ, 20220-460",
        horario: "Segunda a sexta-feira, das 9h às 18h",
        telefone: "(21) 2253-8495",
        imagem: "/acao-cidadania.jpg",
    },
};

export default async function PaginaPosto() {
    const { posto } = useParams();
    const postoData = postos[posto as keyof typeof postos];

    if (!postoData) {
        return <div className="p-4 text-red-500">Posto não encontrado.</div>;
    }

    return (
        <div className="bg-[#EFEFEF] min-h-screen p-4">
            <Link href="/Postos">
                <div className="flex flex-row gap-2 mb-4 mt-20 ml-3">
                    <div>
                         <img src="/botaoVoltarLaranja.png" alt="voltar" />
                    </div>
                    <div className="text-[#FD7014] text-xl mb-4">
                        Voltar
                    </div>
                </div>
                
            </Link>

            <div className="bg-white rounded-2xl shadow-md text-left">
                <Image src={postoData.imagem} alt={postoData.nome} width={400} height={200} className="rounded-md w-full object-cover" />
                <div className="p-4 bg-white">
                    <h1 className="text-[#FD7014] text-lg font-bold mt-4">{postoData.nome}</h1>
                    <p className="text-sm mt-2 text-black">{postoData.descricao}</p>
                    <div className="mt-4 text-xs text-black">
                        <div className="flex flex-row items-center gap-2 my-2">
                            <Image src="/Location.png" alt="Logo" width={20} height={20} />
                            <div>
                                <p className="mt-2">{postoData.endereco}</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-2 my-2">
                            <Image src="/horario.png" alt="Logo" width={16} height={16} />
                            <div>
                                <p className="mt-2">{postoData.horario}</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-2 my-2">
                            <Image src="/Phone30x30.png" alt="Logo" width={16} height={16} />
                            <div>
                                <p className="mt-2">{postoData.telefone}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

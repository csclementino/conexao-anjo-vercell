// src/app/DoacoesUsuario/[categoria]/page.tsx

import BotaoVoltar from "@/components/botaoVoltarLaranja/page";
import Link from "next/link";
import Image from "next/image";

interface Props {
    params: {
        categoria: string;
    };
}

const postosMock: Record<string, { nome: string; postos: { nome: string; rota: string }[] }> = {
    alimentos: {
        nome: 'Alimentos',
        postos: [
            { nome: 'Cruz Vermelha Brasileira', rota: 'cruz-vermelha-brasileira' },
            { nome: 'Mesa Brasil SESC', rota: 'mesa-brasil-sesc' },
            { nome: 'Ação Cidadania', rota: 'acao-cidadania' },
        ],
    },
    higiene: {
        nome: 'Higiene',
        postos: [
            { nome: 'Cruz Vermelha Brasileira', rota: 'cruz-vermelha-brasileira' },
        ],
    },
    roupas: {
        nome: 'Roupas',
        postos: [
            { nome: 'Exército da Salvação', rota: 'exercito-da-salvacao' },
        ],
    },
    infantil: {
        nome: 'Infantil',
        postos: [
            { nome: 'Ação Infância Segura', rota: 'acao-infancia-segura' },
        ],
    },
    saude: {
        nome: 'Saúde',
        postos: [
            { nome: 'Hospital Voluntário', rota: 'hospital-voluntario' },
        ],
    },
    moveis: {
        nome: 'Móveis',
        postos: [
            { nome: 'Lar do Caminho', rota: 'lar-do-caminho' },
        ],
    },
};

export default async function CategoriaPage({ params }: Props) { // Torna a função async
    const { categoria } = await params; // Adiciona 'await' aqui
    const categoriaData = postosMock[categoria];

    if (!categoriaData) {
        return (
            <div className="p-4">
                <h1 className="text-2xl font-bold text-[#FD7014] mb-4">Categoria não encontrada</h1>
                <p className="text-gray-500">Verifique se o link está correto.</p>
            </div>
        );
    }

    return (
        <div className="bg-[#EFEFEF]">
            <div className="pt-10 pl-5">
                <Link href="/TelaPrincipal">
                    <BotaoVoltar />
                </Link>
            </div>
            <h1 className="text-2xl font-bold text-[#FD7014] py-10 text-left px-10 capitalize">{categoriaData.nome}</h1>
            <div className="bg-[#ADADAD] min-h-screen px-6 py-8 rounded-t-4xl">
                <h2 className="text-white text-lg font-bold mb-2 text-left">Postos disponíveis</h2>
                <div className="flex flex-col gap-3 pt-4">
                    {categoriaData.postos.map((posto, index) => (
                        <Link key={index} href={`/DoacoesUsuario/${categoria}/${posto.rota}`} className="flex justify-between items-center bg-white rounded-xl p-4 shadow-md">
                            <div className="flex items-center gap-3">
                                <span className="text-[#FD7014] text-lg"><Image src="/locationSemPreenchimento.png" alt="Localização" width={20} height={20} /></span>
                                <p className="font-medium text-black">{posto.nome}</p>
                            </div>
                            <span className="text-[#FD7014] text-xl"><Image src="/setaLaranja.png" alt="Ícone ir para posto" width={20} height={20} /></span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
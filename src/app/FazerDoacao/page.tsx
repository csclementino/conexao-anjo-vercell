'use client';

import BotaoVoltar from '@/components/botaoVoltarLaranja/page';
import DoacaoCard from '@/components/doarCard/page';
import Image from 'next/image';
import Link from 'next/link';

export default function FazerDoacao() {
    
    
    const categorias = [
        { titulo: 'Higiene', slug: 'higiene', imagem: 'higiene.png' },
        { titulo: 'Roupas', slug: 'roupas', imagem: 'roupas.png' },
        { titulo: 'Infantil', slug: 'infantil', imagem: 'infantil.png' },
        { titulo: 'Saúde', slug: 'saude', imagem: 'saude.png' },
        { titulo: 'Móveis', slug: 'moveis', imagem: 'moveis.png' },
        { titulo: 'Alimentos', slug: 'alimentos', imagem: 'alimentos.png' },
    ];

    return (
        <div className="min-h-screen bg-[#EFEFEF] py-6 flex flex-col justify-between">
            <div className="px-4">
                <Link href="/DoacoesUsuario">
                    <BotaoVoltar />
                    <h1 className="text-[#DC5802] text-2xl font-bold mb-10">Doações</h1>
                </Link>
            </div>
            <div className="bg-[#FD8F47] p-4 rounded-2xl shadow-md shadow-neutral-500">
                {/* Título e ícone */}
                <div className="flex flex-col items-center mb-6 bg-[#]">
                    <h1 className="text-2xl font-bold text-white text-center mb-10 w-50">Escolha a categoria para doar</h1>
                </div>

                {/* Grid de categorias */}
                <div className="grid grid-cols-3 gap-4">
                    {categorias.map((cat) => (
                        <DoacaoCard
                            key={cat.slug}
                            titulo={cat.titulo}
                            slug={cat.slug}
                            imagem={cat.imagem}
                            layout="vertical"
                        />
                    ))}
                </div>
            </div>
            <section className="flex flex-col gap-4 my-10 ">
                <div className="text-[#FD7014] font-bold border-3 rounded-xl py-4 mx-6 flex flex-row justify-between px-4 items-center">
                    <Link href="/MinhasDoacoes">
                        <p>Minhas Doações</p>
                    </Link>
                    <Image src="/setaLaranja.png" alt="Logo" width={20} height={20} />
                </div>
                <div className="text-[#FD7014] font-bold border-3 rounded-xl py-4 mx-6 flex flex-row justify-between px-4 items-center">
                    <Link href="/MinhasSolicitacoes">
                        <p>Doações Solicitadas</p>
                    </Link>
                    <Image src="/setaLaranja.png" alt="Logo" width={20} height={20} />
                </div>

            </section>
        </div>
    );
}

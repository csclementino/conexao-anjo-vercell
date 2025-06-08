'use client'

import { useParams } from 'next/navigation'
import BotaoVoltar from '@/components/botaoVoltar/page'
import Link from 'next/link'

// Mock de dados dos abrigos
const abrigosMock = {
    tesourinha: {
        nome: 'Abrigo no Ginásio Tesourinha',
        capacidade: '500 Pessoas',
        local: 'Porto Alegre',
        endereco: 'Av. Érico Veríssimo, s/n - Menino Deus, Porto Alegre - RS, 90160-180',
        responsavel: 'Prefeitura Municipal (SME)',
        telefone: '(51) 3289-8303',
        status: 'Disponível',
        imagem: '/abrigoginasio.png',
        descricao:
            'Em situações de emergência, como frio intenso ou desastres naturais, o Ginásio Tesourinha é utilizado como abrigo temporário, oferecendo pernoite, alimentação, banho quente e espaço para animais de estimação.',
    },
    fiergs: {
        nome: 'Abrigo Centro de Eventos FIERGS',
        capacidade: '1200 Pessoas',
        local: 'Porto Alegre',
        endereco: 'Av. Assis Brasil, 8787 - Sarandi, Porto Alegre - RS, 91140-001',
        responsavel: 'Defesa Civil RS',
        telefone: '(51) 3210-1234',
        status: 'Quase lotado',
        imagem: '/abrigoFiergs.png',
        descricao:
            'Este abrigo oferece acomodação temporária durante situações emergenciais, com foco em acolher um grande número de pessoas com segurança e estrutura adequada.',
    },
}

export default function PaginaAbrigo() {
    const { abrigo } = useParams();
    const abrigoKey = (abrigo as string).toLowerCase() as keyof typeof abrigosMock;
    const abrigoData = abrigosMock[abrigoKey];

    if (!abrigoData) {
        return (
            <div className="p-6">
                <p>Abrigo não encontrado.</p>
            </div>
        )
    }

    return (
        <div className="bg-[#EFEFEF] min-h-screen">
            {/* Header com imagem */}
            <div className="relative">
                <img
                    src={abrigoData.imagem}
                    alt={`Imagem do ${abrigoData.nome}`}
                    className="w-full h-[250px] object-cover"
                />
                <div className="absolute top-6 left-4">
                    <Link href="/Abrigos">
                        <BotaoVoltar />
                    </Link>
                </div>
                <div className="absolute bottom-3 right-4 bg-[#FD7014] text-white text-xs rounded-xl px-3 py-1">
                    {abrigoData.status}
                </div>
            </div>

            {/* Conteúdo principal */}
            <div className="px-6 py-4 text-left">
                <h1 className="text-[#FD7014] text-xl font-bold mb-2">{abrigoData.nome}</h1>

                <div className="flex flex-row gap-3 mb-4 text-xs">
                    <div className="flex items-center gap-1 text-[#FD8F47] border border-[#FD8F47] rounded-xl px-2 py-1">
                        <img src="/Person.png" alt="Capacidade" className="w-[14px] h-[14px]" />
                        <p>{abrigoData.capacidade}</p>
                    </div>
                    <div className="flex items-center gap-1 text-[#FD8F47] border border-[#FD8F47] rounded-xl px-2 py-1">
                        <img src="/Location.png" alt="Localização" className="w-[14px] h-[14px]" />
                        <p>{abrigoData.local}</p>
                    </div>
                </div>

                <p className="text-sm text-black leading-relaxed mb-6">{abrigoData.descricao}</p>

                <div className="text-sm text-black space-y-3">
                    <div className="flex items-start gap-2">
                        <img src="/Location.png" alt="Endereço" className="w-5 h-5" />
                        <p>{abrigoData.endereco}</p>
                    </div>
                    <div className="flex items-start gap-2">
                        <img src="/Suitcase.png" alt="Responsável" className="w-5 h-5" />
                        <p>{abrigoData.responsavel}</p>
                    </div>
                    <div className="flex items-start gap-2">
                        <img src="/Phone.png" alt="Telefone" className="w-5 h-5" />
                        <p>{abrigoData.telefone}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

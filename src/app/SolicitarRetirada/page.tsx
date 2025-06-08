'use client'

import BotaoVoltar from '@/components/botaoVoltarLaranja/page';
import Link from 'next/link';
import React, { useState } from 'react';

const categorias = [
    'Alimentos',
    'Higiene',
    'Móveis',
    'Infantil',
    'Saúde',
    'Roupas',
];

const postos = ['Cruz Vermelha', 'Posto Central', 'Posto Zona Norte'];

export default function SolicitarRetirada() {
    const [itensSelecionados, setItensSelecionados] = useState<string[]>([]);
    const [postoSelecionado, setPostoSelecionado] = useState('');
    const [detalhes, setDetalhes] = useState('');

    const toggleItem = (item: string) => {
        setItensSelecionados(prev =>
            prev.includes(item)
                ? prev.filter(i => i !== item)
                : [...prev, item]
        );
    };

    const handleSubmit = () => {
        console.log({
            itens: itensSelecionados,
            posto: postoSelecionado,
            detalhes,
        });
        alert('Solicitação enviada!');
    };

    return (
        <div className="min-h-screen bg-white p-6 flex flex-col items-left text-black text-left pb-10">
            <div className="py-6">
                <Link href="/TelaPrincipal">
                    <BotaoVoltar />
                </Link>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="text-2xl font-bold mb-1 text-[#DC5802] pb-4">Solicitar retirada</h1>
            </div>

            <div className="w-full max-w-md">
                <label className="text-lg font-medium mb-2 block">Quais itens você precisa?</label>
                <div className="grid grid-cols-2 gap-2 mb-6">
                    {categorias.map(categoria => {
                        const selecionado = itensSelecionados.includes(categoria);
                        return (
                            <button
                                key={categoria}
                                type="button"
                                onClick={() => toggleItem(categoria)}
                                className={`flex items-center px-4 py-3 rounded-xl transition text-sm font-medium
                  ${selecionado
                                        ? 'bg-[#FFF2E9] text-[#DC5802]'
                                        : 'bg-white text-gray-700'}
                `}
                            >
                                <div
                                    className={`w-4 h-4 mr-3 rounded-sm border-2 flex items-center justify-center
                    ${selecionado ? 'bg-[#DC5802] border-[#DC5802]' : 'border-gray-400'}`}
                                >
                                    {selecionado && (
                                        <div className="w-2 h-2 bg-white rounded-sm" />
                                    )}
                                </div>
                                {categoria}
                            </button>
                        );
                    })}
                </div>

                <label className="text-lg font-medium mb-2 block">Em qual posto deseja retirar?</label>
                <select
                    value={postoSelecionado}
                    onChange={e => setPostoSelecionado(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg p-3 mb-6"
                >
                    <option value="">Selecione um posto</option>
                    {postos.map(posto => (
                        <option key={posto} value={posto}>
                            {posto}
                        </option>
                    ))}
                </select>

                <label className="text-lg font-medium mb-2 block">Detalhe a sua solicitação</label>
                <textarea
                    value={detalhes}
                    onChange={e => setDetalhes(e.target.value)}
                    rows={5}
                    className="w-full border border-gray-300 rounded-lg p-3 mb-6"
                    placeholder="Ex: Estamos precisando principalmente de alimentos e itens de higiene..."
                />

                <button
                    onClick={handleSubmit}
                    className="w-full bg-[#DC5802] text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
                >
                    Solicitar
                </button>
            </div>
        </div>
    );
}

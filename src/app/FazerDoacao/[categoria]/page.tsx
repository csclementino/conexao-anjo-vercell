'use client';

import BotaoVoltar from '@/components/botaoVoltarLaranja/page';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export default function RegistrarDoacao() {
  const { categoria } = useParams();
  const [posto, setPosto] = useState('');
  const [descricao, setDescricao] = useState('');

  const postos = ['Cruz Vermelha', 'Mesa Brasil SESC', 'Ação Cidadania'];

  const handleSubmit = () => {
    console.log({
      categoria,
      posto,
      descricao,
    });
    alert('Doação registrada com sucesso!');
  };

  return (
    <div className="min-h-screen bg-white p-6 text-[#DC5802] flex flex-col">
        <div className="my-4">
          <Link href="/TelaPrincipal">
            <BotaoVoltar />
          </Link>
        </div>
      <h1 className="text-2xl font-bold text-[#DC5802] mb-6 capitalize">{categoria}</h1>

      <label className="font-medium mb-1">Escolha o posto de entrega</label>
      <select
        value={posto}
        onChange={(e) => setPosto(e.target.value)}
        className="border border-[#FD7014] rounded-lg p-3 mb-4"
      >
        <option value="">Selecione um posto</option>
        {postos.map((p) => (
          <option key={p} value={p}>
            {p}
          </option>
        ))}
      </select>

      <label className="font-medium mb-1">Breve descrição</label>
      <textarea
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
        rows={4}
        className="border border-[#FD7014] rounded-lg p-3 mb-6"
        placeholder="Ex: Pacote de arroz, 5kg"
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-[#FD7014] text-white py-3 rounded-2xl text-2xl font-semibold hover:bg-orange-700 transition"
      >
        Doar
      </button>
    </div>
  );
}

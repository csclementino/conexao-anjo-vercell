'use client';

import BotaoVoltar from "@/components/botaoVoltarLaranja/page";
import CardSolicitacao from "@/components/cardSolicitacoes/page";
import Link from "next/link";

const pedidos = [
  {
    numero: '20231',
    categorias: 'Alimentos, Roupas e Higiene',
    posto: 'Cruz Vermelha',
    status: 'Pronto para retirada',
  },
  {
    numero: '20221',
    categorias: 'Alimentos, Móveis e Saúde',
    posto: 'Mesa Brasil SESC',
    status: 'Aguardando um Anjo',
  },
  {
    numero: '20121',
    categorias: 'Saúde, Roupas e Higiene',
    posto: 'Ação Cidadania',
    status: 'Pronto para retirada',
  },
  {
    numero: '10241',
    categorias: 'Infantil, Roupas e Higiene',
    posto: 'Cruz Vermelha',
    status: 'Aguardando um Anjo',
  },
];

export default function MinhasSolicitacoes() {
  return (
    <div className="bg-[#EFEFEF] min-h-screen p-4">
      <header className="mb-6 mt-10">
        <Link href="/DoacoesUsuario">
          <BotaoVoltar />
        </Link>
        <h1 className="text-2xl text-[#DC5802] font-bold mt-4">Minhas solicitações</h1>
      </header>

      <main className="flex flex-col gap-4">
        {pedidos.map((pedido) => (
          <CardSolicitacao
            key={pedido.numero}
            numero={pedido.numero}
            categorias={pedido.categorias}
            posto={pedido.posto}
            status={pedido.status}
          />
        ))}
      </main>
    </div>
  );
}

'use client';
import Link from "next/link";

// Componente de Card
const Card = ({ nome, descricao, cidade, estado, link }: {
  nome: string;
  descricao: string;
  cidade: string;
  estado: string;
  link: string;
}) => (
  <Link href={link}>
    <div className="cursor-pointer pb-8">
      <div className="flex flex-col bg-white p-3 rounded-t-2xl shadow-md shadow-neutral-400 ">
        <div className="text-black text-left">
          <h1 className="font-bold">{nome}</h1>
          <p className="text-sm mt-2 whitespace-pre-line">{descricao}</p>
        </div>
        <div className="flex flex-row justify-start text-xs mt-2 mb-1 gap-2">
          <p className="text-white bg-[#DC5802] px-4 py-1 rounded-xl whitespace-nowrap">{cidade}</p>
          <p className="text-white bg-[#DC5802] px-4 py-1 rounded-xl whitespace-nowrap">{estado}</p>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center font-white bg-[#878787] p-2 text-xs rounded-b-2xl">
        <img src="Info.png" alt="Informações" />
        <p className="ml-2 font-bold">Visualizar mais informações</p>
      </div>
    </div>
  </Link>
);

// Página principal com os dados
export default function CardPostos() {
  const postos = [
    {
      nome: "Cruz Vermelha Brasileira",
      descricao: `A Cruz Vermelha realiza campanhas de
        arrecadação e distribuição de alimentos,
        produtos de higiene e limpeza para pessoas
        em situação de vulnerabilidade.`,
      cidade: "São Paulo",
      estado: "SP",
      link: "/Postos/cruz-vermelha"
    },
    {
      nome: "Mesa Brasil SESC",
      descricao: `Programa de combate à fome que recolhe
        doações de alimentos e distribui para ONGs
        e comunidades carentes.`,
      cidade: "Rio de Janeiro",
      estado: "RJ",
      link: "/Postos/mesa-brasil"
    },
    {
      nome: "Ação Cidadania",
      descricao: `ONG que realiza campanhas de doação de
    alimentos e distribuição para comunidades
    carentes.`,
      cidade: "Belo Horizonte",
      estado: "MG",
      link: "/Postos/acao-cidadania"
    }
  ];

  return (
    <section className="pt-10 px-6 bg-[#EFEFEF]">
      {postos.map((posto, index) => (
        <Card key={index} {...posto} />
      ))}
    </section>
  );
}

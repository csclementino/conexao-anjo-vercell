'use client';

import BotaoVoltar from "@/components/botaoVoltarLaranja/page";
import Image from "next/image";
import Link from "next/link";

interface Psicologo {
  nome: string;
  crp: string;
  telefone?: string;
  cidade?: string;
  especialidade: string;
  email?: string;
}

const psicologos: Psicologo[] = [
  {
    nome: 'Dra. Ana Beatriz Silveira',
    crp: 'CRP: 06/123456',
    telefone: '(11) 91234-5678',
    cidade: 'São Paulo - SP',
    especialidade: 'Psicologia Clínica e Emergencial',
    email: 'ana.silveira@apoioemocional.org',
  },
  {
    nome: 'Dra. Camila Rocha Mendes',
    crp: 'CRP: 05/987654',
    telefone: '(21) 99876-5432',
    cidade: 'Rio de Janeiro - RJ',
    especialidade: 'Atendimento a vítimas de desastres e traumas',
    email: 'camila.mendes@psicovida.com.br',
  },
];

export default function Psicologos() {
  return (
    <div className="min-h-screen bg-[#EFEFEF] pb-20">
      <div className="py-8 pl-4">
        <Link href="/Emergencia">
          <BotaoVoltar />
        </Link>
      </div>
      <h1 className="text-2xl font-bold text-[#DC5802] mb-6">Psicólogos Parceiros</h1>

      <div className="flex flex-col gap-4 text-left">
        {psicologos.map((psicologo, index) => (
          <div key={index} className="text-black px-4 py-2">
            <div className="flex flex-col text-white">
              <div className="bg-[#FD8F47] rounded-t-2xl p-4 shadow-md shadow-neutral-500">
                <h2 className="text-lg mb-1">{psicologo.nome}</h2>
                <p className="text-sm mb-1">{psicologo.crp}</p>
                <p className="text-sm">Especialidade: {psicologo.especialidade}</p>
              </div>
              <div className="bg-white rounded-b-2xl p-4 shadow-md shadow-neutral-500 text-black">
                <div className="flex flex-row gap-2 py-2">
                  <Image src="/telefone.png" alt="email" width={20} height={20} />
                  {psicologo.telefone && <p className="text-sm mb-1">{psicologo.telefone}</p>}
                </div>
                <div className="flex flex-row gap-2 py-2">
                  <Image src="/EmailLaranja.png" alt="email" width={20} height={20} />
                  {psicologo.email && (
                    <p className="text-sm">
                      <a href={`mailto:${psicologo.email}`} className="text-blue-600 underline">{psicologo.email}</a>
                    </p>
                  )}
                </div>
                <div className="flex flex-row gap-2 py-2">
                  <Image src="/LocationFD8F47.png" alt="email" width={20} height={20} />
                  {psicologo.cidade && <p className="text-sm mb-1">{psicologo.cidade}</p>}
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

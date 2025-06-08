// src/app/DoacoesUsuario/[categoria]/[posto]/page.tsx

import { notFound } from 'next/navigation';
import Image from 'next/image';
import BotaoVoltar from '@/components/botaoVoltar/page';
import Link from 'next/link';

type PostoData = {
  nome: string;
  endereco: string;
  horario: string;
  documentos: string[];
};

const postosMock: Record<string, PostoData> = {
  'cruz-vermelha-brasileira': {
    nome: 'Cruz Vermelha Brasileira',
    endereco: 'Av. Moreira Guimarães, 699\n - Indianópolis, São Paulo - SP, 04074-031',
    horario: 'Segunda a sexta-feira,\n das 8h às 17h',
    documentos: ['RG ou CNH', 'Comprovante\n de residência'],
  },
  'mesa-brasil-sesc': {
    nome: 'Mesa Brasil SESC',
    endereco: 'Rua Domingos de Morais, 1450\n - Vila Mariana, São Paulo - SP',
    horario: 'Segunda a sábado, das 9h às 18h',
    documentos: ['RG', 'Comprovante de residência'],
  },
  'acao-cidadania': {
    nome: 'Ação Cidadania',
    endereco: 'Av. Brasil, 10.001\n - Centro, São Paulo - SP',
    horario: 'Segunda a sexta-feira, das 10h às 16h',
    documentos: ['CPF', 'Comprovante de endereço'],
  },
  'exercito-da-salvacao': {
    nome: 'Exército da Salvação',
    endereco: 'Rua Sol Nascente, 50\n - Liberdade, São Paulo - SP',
    horario: 'Segunda a sexta-feira, das 9h às 17h',
    documentos: ['RG ou CNH'],
  },
  'acao-infancia-segura': {
    nome: 'Ação Infância Segura',
    endereco: 'Rua das Crianças, 45\n - Mooca, São Paulo - SP',
    horario: 'Segunda a sexta-feira, das 8h às 14h',
    documentos: ['Certidão de nascimento', 'Comprovante de residência'],
  },
  'hospital-voluntario': {
    nome: 'Hospital Voluntário',
    endereco: 'Av. Saúde, 1000\n - Saúde, São Paulo - SP',
    horario: 'Todos os dias, das 7h às 19h',
    documentos: ['RG', 'Cartão SUS'],
  },
  'lar-do-caminho': {
    nome: 'Lar do Caminho',
    endereco: 'Rua Esperança, 222\n - Zona Sul, São Paulo - SP',
    horario: 'Segunda a sexta-feira, das 8h às 17h',
    documentos: ['RG ou CNH'],
  },
};

type Props = {
  params: {
    posto: string;
  };
};

export default function RetiradaDoacaoPage({ params }: Props) {
  const { posto } = params;
  const postoData: PostoData | undefined = postosMock[posto.toLowerCase()];

  if (!postoData) return notFound();

  return (
    <div className="min-h-screen bg-[#EFEFEF]">
      <div className="bg-[#FD8F47] text-white p-5 shadow-md mb-5 text-left flex flex-row justify-between">
        <div>
          <div className="pt-4">
            <Link href="/TelaPrincipal">
              <BotaoVoltar />
            </Link>
          </div>
          <div className="pt-4">
            <h1 className="text-lg font-light mb-2">Como retiro<br></br> a minha<br></br>doação?</h1>
          </div>
        </div>
        <div className="flex items-end">
          <Image src="/OrderCompleted.png" alt="Logo" width={140} height={140} />
        </div>
      </div>

      <div className="bg-[#D9D9D9] p-4 mb-3 shadow-sm text-left flex flex-row whitespace-pre-line">
        <div className="flex items-center pr-3">
          <Image src="/blob1.png" alt="Logo" width={70} height={70} />
        </div>
        <div>
          <p className="font-bold text-black">Vá até o posto escolhido:</p>
          <p className="text-[#FD7014] font-semibold pt-2">{postoData.nome}</p>
          <div className="flex flex-row items-center">
            <Image src="/location.png" alt="Localização" width={40} height={10} />
            <p className="text-black text-sm mt-1">{postoData.endereco}</p>
          </div>
        </div>

      </div>

      <div className="bg-[#D9D9D9] p-4 mb-3 shadow-sm flex flex-row items-center rounded-xl whitespace-pre-line">
        {/* Texto à esquerda, ocupando ~70% */}
        <div className="flex-1 text-right">
          <p className="font-bold  text-black">Horários de<br />funcionamento</p>
          <p className="text-[#FD7014] mt-1">{postoData.horario}</p>
        </div>

        {/* Imagem à direita, ocupando ~30% */}
        <div className="w-[30%] flex justify-end">
          <Image src="/blob2.png" alt="Logo" width={70} height={70} />
        </div>
      </div>

      <div className="bg-[#D9D9D9] rounded-xl p-4 mb-3 shadow-sm text-left flex flex-row whitespace-pre-line">
        <div className="flex items-center pr-3">
          <Image src="/blob3.png" alt="Logo" width={70} height={70} />
        </div>
        <div>
          <p className="text-black font-bold">Documentos necessários</p>
          <ul className="list-disc ml-5 text-[#FD7014] mt-2">
            {postoData.documentos.map((doc: string, i: number) => (
              <li key={i}>{doc}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

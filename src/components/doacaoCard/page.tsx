'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface DoacaoCardProps {
  titulo: string;
  slug: string;
  imagem: string;
  layout?: 'horizontal' | 'vertical';
}


export default function DoacaoCard({ titulo, slug, imagem, layout = 'horizontal' }: DoacaoCardProps) {
  const router = useRouter();

  const Clique = () => {
    router.push(`/DoacoesUsuario/${slug}`);
  };

  const classesEmComum = 'bg-white rounded-2xl border border-neutral-300 shadow-md cursor-pointer';

  return layout === 'vertical' ? (
    <div onClick={Clique} className={`flex flex-col items-center p-4 ${classesEmComum}`}>
      <Image src={`/${imagem}`} alt={titulo} width={48} height={48} />
      <p className="text-[#FD7014] text-[10px] font-bold mt-2">{titulo}</p>
    </div>
  ) : (
    <div onClick={Clique} className={`flex flex-row items-center pl-4 pt-2 pb-2 pr-2 mb-5 ${classesEmComum}`}>
      <p className="text-[#FD7014] text-xs font-bold mr-3 mb-6">{titulo}</p>
      <Image src={`/${imagem}`} alt={titulo} width={48} height={48} />
    </div>
  );
}

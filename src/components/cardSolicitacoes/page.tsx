import Image from "next/image";

interface CardSolicitacaoProps {
  numero: string;
  categorias: string;
  posto: string;
  status: string;
}

export default function CardSolicitacao({
  numero,
  categorias,
  posto,
  status,
}: CardSolicitacaoProps) {
  const pronto = status.toLowerCase().includes("pronto");

  return (
    <div className="flex w-full rounded-xl overflow-hidden shadow-md mb-4 bg-white">
      {/* Coluna Laranja */}
      <div className="bg-[#FD7014] text-white px-4 py-6 flex items-center justify-center">
        <h1 className="text-xl">Pedido<br></br> #{numero}</h1>
      </div>

      {/* Coluna Conteúdo */}
      <div className="bg-[#FFC7A3] flex-1 p-4 text-black text-xs">
        <div className="mb-2 flex items-center gap-2">
          {/* Ícone categoria (substituir src depois) */}
          <Image src="/caixaCategoria.png" alt="categoria" width={20} height={20} />
          <p>{categorias}</p>
        </div>

        <div className="mb-2 flex items-center gap-2">
          {/* Ícone localização (substituir src depois) */}
          <Image src="/iconeLocal.png" alt="localizacao" width={20} height={20} />
          <p>{posto}</p>
        </div>

        <div className="mt-2">
          <h2 className={`font-semibold ${pronto ? 'text-green-700' : 'text-yellow-700'}`}>
            Status: {status}
          </h2>
        </div>
      </div>
    </div>
  );
}

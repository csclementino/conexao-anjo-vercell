import Image from "next/image";

export default function CardMinhasSolicitacoes () {
    return (
        <div className="border-2 border-[#DC5802] text-[#DC5802] mx-10 rounded-xl my-6 flex flex-row justify-around py-6">
            <Image src="/minhasSolicitacoes.png" alt="Imagem Minhas Solicitacoes" width={20} height={20} />
            <h1>Minhas Solicitações</h1>.
            <Image src="/setaLaranja.png" alt="Seta Ir" width={20} height={20} />
        </div>
    );
}
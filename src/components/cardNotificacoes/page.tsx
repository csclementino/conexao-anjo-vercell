import Image from "next/image";

interface NotificacoesCardProps {
    categoria: string;
    localizacao: string;
    descricao: string;
}

export default function CardNotificacoes({ categoria, localizacao, descricao }: NotificacoesCardProps) {

    const ClassesEmComum = 'flex mx-6 mb-6 flex-col bg-white rounded-xl shadow-md shadow-neutral-400';

    return (
        <div className={`${ClassesEmComum}`}>
            <header className="flex flex-row py-4 text-[#DC5802]">
                <div className="flex flex-row gap-2 pl-4">
                    <div className="flex flex-col">
                        <Image src="/caixa.png" alt={categoria} width={20} height={20} />
                    </div>
                    <h2>{categoria}</h2>
                </div>
                <div className="flex flex-row gap-2 ml-10">
                    <div className="flex flex-col">
                        <Image src="/casa.png" alt={localizacao} width={16} height={16} />
                    </div>
                    <h2>{localizacao}</h2>
                </div>
            </header>
            <section className="text-left px-3 pb-6">
                <div className="flex flex-col">
                    <h2 className="text-[#DC5802]">Descrição</h2>
                    <p className="text-black whitespace-pre-line">{descricao}</p>
                </div>
            </section>
            <footer>
                <div className="w-full bg-[#DC5802] text-white text-center rounded-b-xl py-2">
                    <p className="font-bold">Remover Doação</p>
                </div>
            </footer>
        </div>
    )
}
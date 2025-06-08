import BotaoVoltarLaranja from "@/components/botaoVoltarLaranja/page";
import { Campanha } from "@/components/campanhasAtivas/page";
import DoacoesUsuarioComponente from "@/components/doacoesUsuario/page";
import Link from "next/link";
import Image from "next/image";

export default function DoacoesUsuario() {
    const campanhasData = [
        {
            titulo: "SOS \n Enchentes",
            texto: "Campanha emergencial promovida para arrecadar donativos como água, alimentos, colchões e roupas para vítimas de enchentes.",
            ajuda: "Ajuda Imediata"
        },
        {
            titulo: "Reconstruir \n é Preciso",
            texto: "Projeto de arrecadação e reconstrução de moradias para famílias atingidas por deslizamentos e alagamentos.",
            ajuda: "Ajuda Imediata"
        },
    ];
    return (
        <div className="">
            <header className="relative bg-[#EFEFEF] h-full w-full">
                <div className="pt-10 pl-5">
                    <Link href="/TelaPrincipal">
                        <BotaoVoltarLaranja />
                    </Link>
                </div>
                <div className="flex flex-row justify-center items-center pb-12 pt-5">
                    <div>
                        <img src="Help2.png" />
                    </div>
                    <div className="">
                        <h1 className="flex justify-center items-center text-left font-extrabold text-[#DC5802] text-2xl">Doações<br></br>
                            dos Anjos</h1>
                    </div>
                </div>
            </header>
            <div className="bg-[#EFEFEF] pt-2">
                <DoacoesUsuarioComponente />
            </div>
            <Link href="/RetiradaDoacoes">
                <div className="bg-[#EFEFEF] pb-10">
                    <div className="flex flex-row bg-[#FD8F47] mx-4 pb-4 rounded-2xl shadow-md shadow-neutral-400">
                        <div className="flex flex-col">
                            <div className="pt-4 text-left pl-4">
                                <h1 className="leading-5 font-bold">Escolha um ponto<br></br> de retirada</h1>
                                <div className="flex flex-row pt-4">
                                    <p className="text-xs">Solicite sua retirada</p>
                                    <Image src="/setaRetirada.png" alt="Botão Ir" width={20} height={20} />
                                </div>
                            </div>
                        </div>
                        <div className="absolute right-4">
                            <Image src="/pontoRetirada.png" alt="Imagem Retirada de Doação" width={100} height={100} />
                        </div>
                    </div>
                </div>
            </Link>

            <Link href="/FazerDoacao">
                <div className="bg-[#EFEFEF] pb-10">
                    <div className="flex flex-row bg-[#FD8F47] mx-4 pb-4 rounded-2xl shadow-md shadow-neutral-400">
                        <div className="flex flex-col">
                            <div className="pt-4 text-left pl-4">
                                <h1 className="leading-5 font-bold">Faça uma<br></br> doação</h1>
                                <div className="flex flex-row pt-4">
                                    <p className="text-xs">Ajude quem precisa</p>
                                    <Image src="/setaRetirada.png" alt="Botão Ir" width={20} height={20} />
                                </div>
                            </div>
                        </div>
                        <div className="absolute right-4">
                            <Image src="/Manholdingdonationbox.png" alt="Imagem Retirada de Doação" width={100} height={100} />
                        </div>
                    </div>
                </div>
            </Link>
            <div className="bg-[#EFEFEF]">
                <h1 className="text-left pt-1 ml-8 font-bold text-xl text-[#FD7014]">Campanhas Ativas</h1>
                <Campanha campanhas={campanhasData} />
            </div>
        </div>
    )
}
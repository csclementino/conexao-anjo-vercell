import BotaoVoltar from "@/components/botaoVoltarLaranja/page";
import Link from "next/link";
import Image from "next/image";
import CardPrecisoDoacoes from "@/components/cardPrecisoDoacoes/page";
import CardMinhasSolicitacoes from "@/components/cardMinhasSolicitacoes/page";

export default function PaginaRetiradaDoacoes () {
    return (
        <div className="h-screen bg-[#EFEFEF]">
            <header>
                <div className="pt-20 pl-5 pb-10">
                    <Link href="/DoacoesUsuario">
                        <BotaoVoltar />
                    </Link>
                </div>
                <div className="flex items-center justify-around pb-20 font-bold">
                    <h1 className="text-[#DC5802] text-2xl text-left">Retirada<br></br> de<br></br> Doações</h1>
                    <Image src="/caixaRetirada.png" alt="" width={100} height={100}/>
                </div>
            </header>
            <section className="pb-20 flex flex-col gap-4 bg-[#EFEFEF]">
                <Link href="/SolicitarRetirada">                
                    <CardPrecisoDoacoes />
                </Link>
                <Link href="/MinhasSolicitacoes">               
                    <CardMinhasSolicitacoes />
                </Link> 
            </section>

            
        </div>
    );
}
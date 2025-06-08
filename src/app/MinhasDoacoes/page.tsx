import BotaoVoltarLaranja from "@/components/botaoVoltarLaranja/page"
import SecaoNotificacoes from "@/components/notificacoesComponente/page"
import Link from "next/link"

export default function PaginaNotificacoes() {
    return (
        <div className="bg-[#EFEFEF] h-screen">
            <div className="flex h-30 items-center justify-center">
                <div className="absolute left-5">
                    <Link href="/DoacoesUsuario">
                        <BotaoVoltarLaranja />
                    </Link>
                </div>
                <div className="flex justify-center">
                    <h1 className="text-2xl text-[#DC5802] font-bold">Minhas Doações</h1>
                </div>
            </div>

            <div>
                <SecaoNotificacoes />
            </div>
        </div>
    )
}
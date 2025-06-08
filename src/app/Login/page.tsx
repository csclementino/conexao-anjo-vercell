import Link from "next/link";
import Formulario from "@/components/formularioLogin/page";

export default function Credenciais() {
    return (
        <>
            <div className="relative h-screen">
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
                    <div className="w-full flex flex-col">
                        <Link href="/" className="w-20 h-20 mt-10">
                                <img src="/back-white.png" alt="botao voltar"
                                    className="ml-3 w-6"
                                />
                            </Link>
                        <div className="mb-4 w-full h-[20%] flex flex-row items-center gap-2.5 pl-3">
                            <div className="flex flex-col w-full ">
                                <div className="flex justify-center">
                                    <img src="logo.png" alt="logo" className="w-65 mt-20" />
                                </div>
                                
                            </div>
                        </div>
                        <div className="w-full h-[80%] mt-10 flex flex-col items-center">
                            <Formulario />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
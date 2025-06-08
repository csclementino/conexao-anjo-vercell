'use client';

import BotaoVoltar from "@/components/botaoVoltarLaranja/page";
import Link from "next/link";
import Image from "next/image";

export default function DefesaCivil() {
    return (
        <div className="min-h-screen bg-white p-6 flex flex-col">
            <div className="mb-4">
                <Link href="/Emergencia">
                    <BotaoVoltar />
                </Link>
            </div>

            <h1 className="text-2xl font-bold text-[#DC5802] mb-6">CRAS</h1>

            <div className="border-3 border-[#FD8F47] rounded-xl shadow-md text-black">
                <div className="bg-[#FD8F47] rounded-t flex items-center justify-center p-6">
                    <Image src="/contact.png" alt="Defesa Civil" width={100} height={100} />

                </div>
                <div className="text-left px-2 py-6">
                    <h2 className="text-xl font-bold text-black mb-4">Perdeu seus <br></br>documentos?</h2>

                    <p className="text-xs mb-4">
                        Se você perdeu ou danificou seus documentos em um desastre, pode solicitar a segunda via gratuita em situações reconhecidas pela Defesa Civil.
                    </p>
                    <h1 className="font-bold text-lg text-[#FD8F47]">Entre em contato:</h1>
                    <div className="bg-white rounded-lg p-4 border-orange-400 text-left gap-4 flex flex-col">
                        <div className="flex flex-row gap-2">
                            <Image src="/LocationFD8F47.png" alt="telefone" width={20} height={20} />
                            <p className="text-xs">Agências em todo o Brasil</p>

                        </div>
                        <div className="flex flex-row gap-2">
                            <Image src="/telefone.png" alt="telefone" width={20} height={20} />
                            <p className="text-xs">Atendimento de segunda a sexta.</p>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

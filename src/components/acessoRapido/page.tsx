{/* Botões de acesso rápido: Abrigos, Doações e Emergência */}

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AcessoRapido() {
    const router = useRouter();
    const [abrigos, setAbrigos] = useState(false);
    const [doacoes, setDoacoes] = useState(false);
    const [emergencia, setEmergencia] = useState(false);

    return (
        <div className="">
            <div className="flex flex-row items-center justify-center">
                <section className="flex flex-row gap-4">
                    <Link href="/Abrigos">
                        <div className="rounded-3xl flex flex-col flex-wrap items-center text-left shadow-neutral-500 shadow-md shadow-blur-sm p-2 border-4 border-[#FD7014]">
                            <img src="abrigos.png" alt="Lista de Abrigos"/>
                            <div>
                                <h2 className="text-[#DC5802] text-xs">Abrigos</h2>
                            </div>
                        </div>
                    </Link>
                    <Link href="/DoacoesUsuario">
                        <div className="rounded-3xl flex flex-col flex-wrap items-center text-left shadow-neutral-500 shadow-md p-2 border-4 border-[#FD7014]">
                            <img src="doacoes.png" alt="Imagem Voluntario" />
                            <div>
                                <h2 className="text-[#DC5802] text-xs">Doações</h2>
                            </div>
                        </div>
                    </Link>
                    <Link href="/Emergencia">
                        <div className="rounded-3xl flex flex-col flex-wrap items-center text-left shadow-neutral-500 shadow-md p-2 border-4 border-[#FD7014]">
                            <img src="emergencia.png" alt="Imagem Preciso de Apoio" />
                            <div>
                                <h2 className="text-[#DC5802] text-xs">Emergência</h2>
                            </div>
                        </div>
                    </Link>
                </section>
            </div>
        </div>
    );
}
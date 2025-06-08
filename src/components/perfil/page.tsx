'use client'

import Link from "next/link"
import { useEffect, useState } from "react"

export default function PerfilComponente() {
    const [perfil, setPerfil] = useState({
        nome: 'Sem informação',
        email: '',
        telefone: '',
        localidade: ''
    });
    const formatarTelefone = (telefone: string) => {
        if (!telefone || telefone.length !== 11) return 'Telefone não informado';
        const ddd = telefone.slice(0, 2);
        const parte1 = telefone.slice(2, 7);
        const parte2 = telefone.slice(7);
        return `(${ddd}) ${parte1}-${parte2}`;
    }

    useEffect(() => {
        const usuarioId = localStorage.getItem('usuarioId');

        if (usuarioId) {
            fetch(`https://conexao-anjo-cdeabacdbngvghed.brazilsouth-01.azurewebsites.net/api/buscar-usuario/${usuarioId}`)
                .then(res => {
                    if (!res.ok) throw new Error("Erro ao buscar dados do perfil.");
                    return res.json();
                })
                .then(data => {
                    setPerfil({
                        nome: data.dados_user.nome || 'Nome não informado',
                        email: data.dados_user.email || 'Email não informado',
                        telefone: formatarTelefone(data.dados_user.telefone || ''),
                        localidade: data.dados_user.localidade || 'Localidade não informada'
                    });
                })
                .catch(error => {
                    console.error("Erro ao carregar perfil:", error);
                });
        } else {
            console.warn("ID de login não encontrado no localStorage.");
        }
    }, []);

    return (
        <section className="pt-12">
            <div className="bg-[#D9D9D9] mx-6 rounded-4xl">
                <div className="h-[%]">
                    <img src="bannerPerfil.png" className="h-[20vh] w-full" alt="Banner Perfil" />
                </div>
                <div>
                    <img alt="" />
                </div>
                <div className="text-left flex flex-col p-6 text-black text-xs">
                    <div>
                        <p>Nome completo</p>
                        <p className="text-xl font-bold text-[#FD7014]">{perfil.nome}</p>
                    </div>
                    <div className="mt-3">
                        <p>Email</p>
                        <p className="text-sm font-bold">{perfil.email}</p>
                    </div>
                    <div className="mt-3">
                        <p>Telefone de contato</p>
                        <p className="text-sm font-bold">{perfil.telefone}</p>
                    </div>
                    <div className="mt-3">
                        <p>Localidade</p>
                        <p className="text-sm font-bold">{perfil.localidade}</p>
                    </div>
                </div>
            </div>
            <div className="bg-[#FD7014] flex justify-center mx-18 rounded-2xl p-2 mt-10 shadow-md shadow-neutral-400">
                <Link href="/" className="text-white flex items-center flex-row gap-2">
                    <p className="text-sm">Sair da minha conta</p>
                    <img src="sair.png" alt="Ícone de sair" />
                </Link>
            </div>
        </section>
    );
}

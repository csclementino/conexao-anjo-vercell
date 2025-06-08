{/*Componente Header com Nav bar*/ }

import Link from "next/link";

export default function Header() {
    return (
        <header className="relative bg-white h-full w-full shadow-md shadow-neutral-400">
            <div className="">
                <div className="flex items-center justify-between p-4">
                    <img src="titulo_logo.png" alt="Logo" className="w-20 h-12" />
                    <Link href="/Notificacoes">
                        <img src="Notifications.png" alt="Notificações" className="w-8 h-8" />
                    </Link>
                </div>
                <nav>
                    <ul className="flex items-center justify-around p-2 mx-4">
                        <li>
                            <Link href="/TelaPrincipal" className="text-[#DC5802] hover:text-gray-300 flex flex-row gap-1">
                                <img src="Home.png" alt="Home" className="w-full h-full" />
                                Início
                            </Link>
                        </li>
                        <li>
                            <Link href="/Postos" className="text-[#DC5802] hover:text-gray-300 flex flex-row gap-1">
                                <img src="Location.png" alt="Home" className="w-full h-full"/>
                                Postos
                            </Link>
                        </li>
                        <li>
                            <Link href="/Perfil" className="text-[#DC5802] hover:text-gray-300 flex flex-row gap-1">
                                <img src="Profile.png" alt="Home" className="w-full h-full"/>
                                Perfil
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
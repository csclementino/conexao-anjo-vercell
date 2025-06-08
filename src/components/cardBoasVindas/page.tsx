import { useState, useEffect } from 'react';

export default function CardBoasVindas() {
    const [nome, setNome] = useState(''); 

    useEffect(() => {
        const username = localStorage.getItem('username');
        if (username) {
            setNome(username);
        } else {
            setNome('Visitante'); 
        }
    }, []);

    return (
        <>
            <div className="bg-[#FD7014] flex items-end rounded-4xl m-8 text-left shadow-neutral-400 shadow-md">
                <div className="flex flex-col pb-8">
                    <h1 className="text-white text-2xl leading-8 text-left ml-6 mt-8 mb-5">Olá, {nome}</h1>
                    <div className="flex flex-col gap-4">
                        <p className="text-white text-xs leading-5 text-left ml-6 w-30">Toda grande jornada<br /> começa com<br /> um primeiro passo.</p>
                        <p className="text-white text-xs leading-5 text-left ml-6">O nosso é estar<br /> com você!</p>
                    </div>
                </div>
                <div className="">
                    <img src="VoluntarioDoacao.png" alt="Imagem Voluntario" className="w-full h-40" />
                </div>
            </div>
        </>
    );
}

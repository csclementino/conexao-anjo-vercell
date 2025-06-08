'use client'
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from "next/link";

const TelaInicial = () => {
  const router = useRouter();

  
  return (
    
    <div className="relative h-screen w-full overflow-hidden">
       
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videoLogin.mp4" type="video/mp4" />
        Seu navegador não suporta vídeo.
      </video>

      
      <div className="absolute inset-0 bg-black opacity-60 z-0" />

        <div className='relative z-10 h-[75vh] mt-10 flex flex-col text-left justify-center ml-5 gap-5'>
          <h1 className='text-4xl font-bold bg-gradient-to-r from-[#FF8001] to-[#FA3C00] bg-clip-text text-transparent'>Bem-vindo ao <br></br> Conexão Anjo!</h1>
          <p className='text-2xl '>Conectando vidas, <br /> protegendo histórias</p>
        </div>


      <main className="relative z-10 flex flex-col items-center justify-center ">
        <div className="">
          <Link href="/Login" className="bg-gradient-to-r from-[#FF8001] to-[#FA3C00] px-13 py-3 rounded-4xl text-2xl">Login</Link>
        </div>
        <div className="mt-6">
          <p>Ainda não tem uma conta?</p>
          <Link href="/CadastroUsuario">Cadastre-se aqui</Link>
        </div>
      </main>
    </div>
  );
}

export default TelaInicial;

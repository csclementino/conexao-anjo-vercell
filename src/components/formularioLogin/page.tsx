'use client';

import React, { useState } from 'react';
import EmailInput from '@/components/formularioLogin/EmailInput';
import SenhaInput from '@/components/formularioLogin/SenhaInput';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Formulario = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErro('');

    // Verificação se os campos estão preenchidos
    if (!email || !senha) {
      setErro('Preencha todos os campos.');
      return;
    }

    try {
      const response = await fetch('https://conexao-anjo-cdeabacdbngvghed.brazilsouth-01.azurewebsites.net/api/login-usuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();

      if (!response.ok || !data.sucesso) {
        router.push('/TelaPrincipal');
        setErro(data.erro || 'Erro ao fazer login.');
        return;
      }

      // Sucesso: salvar ID e redirecionar
      localStorage.setItem('usuarioId', data.id_login.toString());
      localStorage.setItem('username', data.nom_user.toString());
      router.push('/TelaPrincipal');
    } catch (error) {
      console.error('Erro na requisição:', error);
      setErro('Erro ao conectar com o servidor.');
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="w-[85%] pl-5 pr-5 pt-5 rounded-lg flex flex-col gap-8"
    >
      {erro && (
        <div className="text-red-500 text-sm text-center font-semibold">
          {erro}
        </div>
      )}

      <div className='flex flex-col gap-8'>
        <EmailInput value={email} onChange={(event) => setEmail(event.target.value)} />
        <SenhaInput value={senha} onChange={(event) => setSenha(event.target.value)} />
      </div>

      <div className='flex justify-center'>
        <button className="bg-[#FFFFFF] px-25 py-2 rounded-xl mt-10 text-[#FB5600] text-2xl">Entrar</button>
      </div>
    </form>
  );
};

export default Formulario;

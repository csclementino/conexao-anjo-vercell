'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import EmailInput from '@/components/formularioLogin/EmailInput';
import SenhaInput from '@/components/formularioLogin/SenhaInput';
import NomeInput from '@/components/formularioCadastro/NomeInput';
import ConfirmarSenhaInput from '@/components/formularioCadastro/ConfirmarSenhaInput';
import LocalizacaoSelector from '@/components/formularioCadastro/LocalizacaoSelector';

import Link from 'next/link';

const FormularioCadastro = () => {
  const router = useRouter();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');  const [mensagem, setMensagem] = useState('');
  const [loading, setLoading] = useState(false);
  const [uf, setUf] = useState('');
  const [cidade, setCidade] = useState('');

  // Função simples para validar email com regex
  const validarEmail = (email: string) => {
    // Regex básica para email válido
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMensagem('');

    // Validar campos preenchidos
    if (!nome || !email || !senha || !confirmarSenha || !uf || !cidade) {
      setMensagem('Por favor, preencha todos os campos.');
      return;
    }

    if (!validarEmail(email)) {
      setMensagem('Formato de e-mail inválido.');
      return;
    }

    if (senha !== confirmarSenha) {
      setMensagem('Senha e confirmação de senha não coincidem.');
      return;
    }

    // Tudo validado, pode enviar para a API
    setLoading(true);

    try {
      const response = await fetch('https://conexao-anjo-cdeabacdbngvghed.brazilsouth-01.azurewebsites.net/api/cadastrar-usuario', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome,
          email,
          senha,
          uf,      
          cidade,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        if (data === true || data.sucesso) {
          setMensagem('Usuario cadastrado com sucesso!');
          setNome('');
          setEmail('');
          setSenha('');
          setConfirmarSenha('');
          setUf('');
          setCidade('');
          localStorage.setItem('usuarioId', data.id_login.toString());
          localStorage.setItem('username', data.nom_user.toString());
          router.push('/TelaPrincipal');
        } else {
          setMensagem(data.mensagem || 'Erro ao cadastrar passageiro.');
        }
      } else {
        setMensagem(data.mensagem || 'Erro na requisição.');
      }
    } catch (error) {
      setMensagem('Erro na comunicação com o servidor.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="flex flex-col gap-5 h-screen items-center justify-center"
    >
      <div className='flex flex-row'>
        <div className='flex items-center flex-col'>
          <div className='w-full mt-33'>
            <Link href="/">
              <img src="/back-white.png" alt="voltar" className='h-6 w-6 absolute left-4'/>
            </Link>
            <div className='flex items-center w-full justify-center'>
              <img src="/big-user.png" alt="logo" className='h-30 w-30' />
            </div>
          </div>
          <div className=' ml-[18%] mr-[18%] mt-4'>
          </div> 
        </div>
      </div>

      <div className='flex flex-col gap-8 pl-8 pr-8 mt-5 mb-5'>
        <NomeInput value={nome} onChange={(event) => setNome(event.target.value)} />
        <EmailInput value={email} onChange={(event) => setEmail(event.target.value)} />
        <SenhaInput value={senha} onChange={(event) => setSenha(event.target.value)} />
        <ConfirmarSenhaInput value={confirmarSenha} onChange={(event) => setConfirmarSenha(event.target.value)} />
        <LocalizacaoSelector
          uf={uf}
          cidade={cidade}
          onUfChange={(newUf) => {
            setUf(newUf);
            setCidade(''); 
          }}
          onCidadeChange={setCidade}
        />
        <h1 className='font-inter text-sm text-[#ffffff] text-left'>
          Ao se inscrever, você está concordado com nossos <span className='text-[#fdb125]'>termos de uso</span> e <span className='text-[#fdb125]'>política de privacidade</span>.
        </h1>
      </div>
      
      {mensagem && (
        <p className="text-center text-white font-medium mb-4">{mensagem}</p>
      )}

      <div className='flex justify-end'>
        <button type="submit" disabled={loading} className="font-bold cursor-pointer mb-12 bg-white text-[#DC5802] px-20 py-2 rounded-xl shadow-md text-2xl shadow-neutral-600">
          Criar conta
        </button>
      </div>
    </form>
  );
};

export default FormularioCadastro;

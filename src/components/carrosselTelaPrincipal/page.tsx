{/* Carrossel com card de boas-vindas para o usuário, exibido na página principal */}

import { useState } from 'react';
import CardBoasVindas from '@/components/cardBoasVindas/page'; 

export default function CarrosselTelaPrincipal() {
    return (
        <div className="flex justify-center items-center">
            <CardBoasVindas />
        </div>
    );
}
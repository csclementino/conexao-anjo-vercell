'use client'
import AcessoRapido from '@/components/acessoRapido/page';
import CarrosselTelaPrincipal from '@/components/carrosselTelaPrincipal/page';
import Header from '@/components/header/page';
import { Parceiros } from '@/components/parceiros/page';
import UltimasNoticias from '@/components/ultimasNoticias/page';

export default function TelaPrincipal() {
    const parceirosData = [
        {
            caminho: "arc_card.png",
            titulo: "Grupo ARC",
            texto: "Campanha emergencial promovida para arrecadar donativos como água, alimentos, colchões e roupas para vítimas de enchentes.",
            link: "/"
        },
        {
            caminho: "devfiap.png",
            titulo: "FIAP",
            texto: "A FIAP apoia a Global Solution, que impulsiona projetos inovadores para resolver desafios sociais alinhados aos ODS da ONU.",
            link: "https://www.fiap.com.br/institucional/"
        },
    ];
    return (
        <div>
            <Header />
            <main className="bg-[#EFEFEF] h-screen bg-gradient-to-r">
                <CarrosselTelaPrincipal />
                <AcessoRapido />
                <UltimasNoticias />
                <div className="bg-[#EFEFEF]">
                    <h1 className="text-left ml-8 font-bold text-xl text-[#FD7014]">Parceiros</h1>
                    <div>
                        <Parceiros titulo="Parceiros" parceiros={parceirosData} />
                    </div>
                </div>
            </main>
        </div>
    );
}
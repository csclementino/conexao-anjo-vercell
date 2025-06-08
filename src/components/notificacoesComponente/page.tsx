import CardNotificacoes from "../cardNotificacoes/page";

export default function SecaoNotificacoes() {
    return (
        <section className="flex flex-col bg-[#EFEFEF] gap-2">
                <CardNotificacoes categoria="Alimentos" localizacao="Cruz Vermelha" descricao="Grupo Solidário doa cestas básicas e itens essenciais a famílias carentes, promovendo alívio imediato e dignidade em comunidades vulneráveis." />
                <CardNotificacoes categoria="Alimentos" localizacao="Cruz Vermelha" descricao="Grupo Solidário doa cestas básicas e itens essenciais a famílias carentes, promovendo alívio imediato e dignidade em comunidades vulneráveis." />
        </section>
    );
}
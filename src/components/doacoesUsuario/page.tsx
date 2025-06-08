import DoacaoCard from '@/components/doacaoCard/page';

export default function DoacoesUsuarioComponente() {
  return (
    <section className="bg-[#EFEFEF] pb-5 px-4">
      <div className="grid grid-cols-2 gap-4">
        <DoacaoCard titulo="Higiene" slug="higiene" imagem="higiene.png" />
        <DoacaoCard titulo="Alimentos" slug="alimentos" imagem="alimentos.png" />
      </div>
      <div className="grid grid-cols-4 gap-4 mb-6">
        <DoacaoCard titulo="Roupas" slug="roupas" imagem="roupas.png" layout="vertical" />
        <DoacaoCard titulo="Infantil" slug="infantil" imagem="infantil.png" layout="vertical" />
        <DoacaoCard titulo="Saúde" slug="saude" imagem="saude.png" layout="vertical" />
        <DoacaoCard titulo="Móveis" slug="moveis" imagem="moveis.png" layout="vertical" />
      </div>
    </section>
  );
}


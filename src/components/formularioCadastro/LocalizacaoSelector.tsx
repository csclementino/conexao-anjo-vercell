import React from 'react';

interface Props {
  uf: string;
  cidade: string;
  onUfChange: (value: string) => void;
  onCidadeChange: (value: string) => void;
}

const estadosECidades: Record<string, string[]> = {
  SP: ['São Paulo', 'Campinas', 'Santos'],
  RJ: ['Rio de Janeiro', 'Niterói', 'Petrópolis'],
  MG: ['Belo Horizonte', 'Uberlândia', 'Contagem'],
};

const LocalizacaoSelector: React.FC<Props> = ({ uf, cidade, onUfChange, onCidadeChange }) => {
  const cidades = estadosECidades[uf] || [];

  return (
    <div className="flex flex-col gap-8 w-full">
      {/* UF */}
      <div className="form-group flex flex-row border-[2px] p-2 rounded-2xl shadow-md items-center">
        <div className="ml-1 w-[15%] flex justify-center">
          <img src="/location-white.png" alt="UF icon" className="w-7 h-7" />
        </div>
        <select
        value={uf}
        onChange={(e) => {
            onUfChange(e.target.value);
            onCidadeChange('');
        }}
        className="ml-2 w-full font-inter text-sm pr-3 focus:outline-none bg-transparent"
        >
        <option value="" className="bg-[#d86608] text-white">Selecione a UF</option>
        {Object.keys(estadosECidades).map((estado) => (
            <option key={estado} value={estado} className=" text-black">
            {estado}
            </option>
        ))}
        </select>
      </div>

      {/* Cidade */}
      <div className="form-group flex flex-row border-[2px] p-2 rounded-2xl shadow-md items-center">
        <div className="ml-1 w-[15%] flex justify-center">
          <img src="/location-white.png" alt="UF icon" className="w-7 h-7" />
        </div>
        <select
          value={cidade}
          onChange={(e) => onCidadeChange(e.target.value)}
          className="ml-2 w-full font-inter text-sm pr-3 focus:outline-none bg-transparent"
          disabled={!uf}
        >
          <option value="" className="bg-[#d86608] text-white">{uf ? 'Selecione a cidade' : 'Escolha uma UF primeiro'}</option>
          {cidades.map((cidadeItem) => (
            <option key={cidadeItem} value={cidadeItem} className=" text-black">
              {cidadeItem}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default LocalizacaoSelector;

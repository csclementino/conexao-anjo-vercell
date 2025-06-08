// components/NewsCard.tsx
import React from 'react';
import Link from 'next/link';

const CardNoticias = () => {
  return (
    <div className="max-w-sm mx-12 my-4 rounded-xl text-left overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-[#D3D3D3] mb-10">
      {/* Imagem do Card */}
      <div className="">
        <img src="valedoaco.png" className="w-full h-40"></img>
      </div>

      {/* Conteúdo Textual */}
      <div className="">
        <h3 className=" font-bold px-4 pt-4 text-gray-800">
          Enchentes no Vale do Aço em Minas Gerais
        </h3>
        
        <p className="text-black px-4 pt-4 pb-6">
          Em: Janeiro de 2025
        </p>
      </div>
    </div>
  );
};

export default CardNoticias;
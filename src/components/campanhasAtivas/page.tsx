'use client';

import React, { useState, useRef } from 'react';

interface Campanha {
    titulo: string;
    texto: string;
    ajuda: string;
}

interface CampanhasProps {
    campanhas: Campanha[];
}

export const Campanha = ({ campanhas }: CampanhasProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    const handleNext = () => {
        if (carouselRef.current) {
            const newSlide = currentSlide + 1;
            carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
            setCurrentSlide(newSlide);
        }
    };

    const handlePrev = () => {
        if (carouselRef.current) {
            const newSlide = currentSlide - 1;
            carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
            setCurrentSlide(newSlide);
        }
    };

    return (
        <div className="relative px-[6vh] pb-[4vh] pt-[4vh] bg-[#EFEFEF]">
            <div
                ref={carouselRef}
                className="flex overflow-hidden scroll-smooth bg-[#FFFFFF] border-2 border-[#FD8F47] shadow-md shadow-neutral-400 rounded-[2.5vh] snap-x snap-mandatory"
            >
                {campanhas.map((campanha, index) => (
                    <div
                        key={index}
                        className="min-w-full flex-shrink-0 snap-align-start transition-transform duration-300"
                    >
                        <div className="flex flex-col items-center text-left pt-5 pb-5">
                            <div className="flex text-black">
                                <h3 className="text-[20px] font-xxgeom font-bold pt-3 whitespace-pre-line">{campanha.titulo}</h3>
                                <div className="pl-1">
                                    <p className="text-[1.7vh] leading-[100%] w-30 text-black">
                                        {campanha.texto}
                                    </p>
                                    <p className="text-[1.7vh] font-bold leading-[100%] pt-2 w-30 text-black">
                                        {campanha.ajuda}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button
                className={`flex items-center justify-center absolute top-15 -translate-y-1/3 left-0 border-none text-[#FD8F47] text-3xl w-12 h-12 rounded-full cursor-pointer transition-colors ${currentSlide === 0 ? 'opacity-30 cursor-not-allowed' : ''
                    }`}
                onClick={handlePrev}
                disabled={currentSlide === 0}
            >
                <img src="botaoVoltarLaranja.png" alt="seta"
                    className='w-4 h-5'
                />
            </button>
            <button
                className={`flex items-center justify-center absolute top-15 -translate-y-1/3 right-0 border-none text-[#FD8F47] text-3xl w-12 h-12 rounded-full cursor-pointer transition-colors ${currentSlide === campanhas.length - 1 ? 'opacity-30 cursor-not-allowed' : ''
                    }`}
                onClick={handleNext}
                disabled={currentSlide === campanhas.length - 1}
            >
                <img src="botaoVoltarLaranja.png" alt="seta"
                    className='w-4 h-5 rotate-180'
                />
            </button>
        </div>
    );
};
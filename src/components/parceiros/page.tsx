import React, { useState, useRef } from 'react';

interface Parceiro {
    caminho: string;
    titulo: string;
    texto: string;
    link: string;
}

interface ParceirosProps {
    titulo: string;
    parceiros: Parceiro[];
}

export const Parceiros = ({ titulo, parceiros }: ParceirosProps) => {
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
        <div className="relative px-[6vh] pb-[4vh] pt-[2vh] bg-[#EFEFEF]">
            <div
                ref={carouselRef}
                className="flex overflow-x-hidden scroll-smooth bg-[#FD8F47] shadow-md shadow-neutral-400 rounded-[2.5vh] snap-x snap-mandatory"
            >
                {parceiros.map((parceiro, index) => (
                    <div
                        key={index}
                        className="min-w-full flex-shrink-0 snap-align-start transition-transform duration-300"
                    >
                        <div className="flex items-center text-left">
                            <img
                                src={parceiro.caminho}
                                alt={parceiro.titulo}
                                className="rounded-tl-[2.5vh] rounded-br-none rounded-bl-[2.5vh] ml-2 w-24 object-cover"
                            />
                            <div className="flex flex-col gap-1 text-white ml-3 my-4">
                                <h3 className="text-[16px] font-xxgeom">{parceiro.titulo}</h3>
                                <p className="text-[1.7vh] leading-[100%] w-30 font-inter text-white">
                                    {parceiro.texto}
                                </p>
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
                className={`flex items-center justify-center absolute top-15 -translate-y-1/3 right-0 border-none text-[#FD8F47] text-3xl w-12 h-12 rounded-full cursor-pointer transition-colors ${currentSlide === parceiros.length - 1 ? 'opacity-30 cursor-not-allowed' : ''
                    }`}
                onClick={handleNext}
                disabled={currentSlide === parceiros.length - 1}
            >
                <img src="botaoVoltarLaranja.png" alt="seta" 
                    className='w-4 h-5 rotate-180'
                />
            </button>
        </div>
    );
};
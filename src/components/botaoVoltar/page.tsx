{/** precisa ajeitar, o botao voltar laranja e branco estão ao contrário */}

const BotaoVoltarLaranja = () => {
  return (
      <button
        className="flex items-center justify-center"
        aria-label="Voltar"
      >
        <img src="/back-white.png" alt="botao voltar" 
        className='w-6 h-6'
        />
      </button>
  )
}

export default BotaoVoltarLaranja
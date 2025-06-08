import Image from "next/image"

const BotaoVoltar = () => {
  return (
    <button
      className="flex items-center justify-center"
      aria-label="Voltar"
    >
      <Image
        src="/botaoVoltarLaranja.png"
        alt="Botão Voltar"
        width={12}
        height={12}
      />
    </button>
  )
}

export default BotaoVoltar
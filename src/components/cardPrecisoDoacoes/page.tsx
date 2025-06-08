import Image from "next/image";

export default function CardPrecisoDoacoes() {
    return (
        <div className="flex bg-[#FD7014] mx-10 rounded-xl text-left shadow-md shadow-neutral-400">
            <div className="p-6">
                <h2 className="font-bold">Precisa de<br></br> Doações?</h2>
                <h1 className="mt-6 font-bold text-2xl">Solicite Aqui</h1>
            </div>
            <div className="flex items-end pl-2">
                <Image src="/retiradaDoacoes.png" alt="" width="100" height="20" />
            </div>
        </div>
    );
}
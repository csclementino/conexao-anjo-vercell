import CardNoticias from "@/components/cardNoticias/page"

export default function UltimasNoticias () {
    return (
        <div className="bg-[#EFEFEF]">
            <h1 className="text-left mt-10 ml-8 font-bold text-xl text-[#FD7014]">Últimas Notícias</h1>
            <div className="flex flex-col items-center">
            <CardNoticias />
            </div>
        </div>
    )
}
import CardPostos from "@/components/cardPostos/page";
import Header from "@/components/header/page";

export default function PaginaPostos() {
    return (
        <div>
            <Header />
            <div className="h-screen bg-[#EFEFEF]">
            <CardPostos />
            </div>
        </div>
    )
}
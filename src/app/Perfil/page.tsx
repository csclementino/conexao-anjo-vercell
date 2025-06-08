import Header from "@/components/header/page"
import PerfilComponente from "@/components/perfil/page"

export default function Perfil() {
    return (
        <div>
            <Header />
            <div className="bg-[#EFEFEF] h-screen">
                <PerfilComponente />
            </div>
        </div>
    )
}
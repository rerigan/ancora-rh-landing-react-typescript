import { Anchor } from 'lucide-react'
const NavBar = () => {
  return (
    <div id="navbar" className="w-full hidden md:flex absolute top-5 justify-center gap-10 font-bold text-blue-800 z-2">
        <div id="logo" className="absolute left-5 flex items-center">
          <Anchor className="mr-2 " size={40} />
          <p className="text-2xl ml-2">Âncora RH</p>
        </div>
        <button className="absolute right-40">Saiba Mais</button>
        <button>Início</button>
        <a href="#servicos-section">Serviços</a>
        <button>Depoimentos</button>
        <button>Contato</button>
      
    </div>
  )
}

export default NavBar;
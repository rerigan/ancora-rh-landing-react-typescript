import { Anchor } from 'lucide-react'
const NavBar = () => {
  return (
    <div id="navbar" className="w-full fixed top-5 justify-center gap-10 font-bold text-blue-800 z-2">
        <div id="logo" className="md:absolute md:left-5 flex items-center justify-center ">
          <Anchor className="mr-2 " size={40} />
          <p className="text-2xl ml-2">Âncora RH</p>
        </div>
        <div className="justify-center md:flex gap-20 hidden ">
        
        <button>Início</button>
        <a href="#servicos-section">Serviços</a>
        <button>Depoimentos</button>
        <button>Contato</button>
        </div>
    </div>
  )
}

export default NavBar;
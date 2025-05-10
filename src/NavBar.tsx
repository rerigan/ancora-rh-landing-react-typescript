import { Anchor } from 'lucide-react'
const NavBar = () => {
  return (
    <div id="navbar" className="w-full fixed top-0 pt-8 justify-center gap-10 font-bold text-blue-800 z-2 pb-2">
        <div id="logo" className="md:absolute md:left-5 flex items-center justify-center bg-blue top-6">
          <Anchor className="mr-2 " size={35} />
          <p className="titletext text-2xl ml-2">Âncora RH</p>
        </div>
        <div className="justify-center md:flex gap-20 hidden ">
        
        <a href="#hero-section">Início</a>
        <a href="#servicos-section">Serviços</a>
        <a href="#navbar">Depoimentos</a>
        <a href="#contact-section">Contato</a>
        </div>
    </div>
  )
}

export default NavBar;
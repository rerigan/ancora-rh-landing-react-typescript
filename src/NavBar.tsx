import { Anchor } from 'lucide-react'
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';
const NavBar = () => {
  function openNav() {
    const linksBar  = document.getElementById('linksbar');
    linksBar?.classList.toggle('opacity-100')
    linksBar?.classList.toggle('flex-col')
    linksBar?.classList.toggle('flex')
    linksBar?.classList.toggle('text-center')
    linksBar?.classList.toggle('mt-20')
    document.getElementById("x")?.classList.toggle('hidden')
    document.getElementById("menu")?.classList.toggle('hidden')
  }
  return (
    <div id="navbar" className="w-full fixed top-0 pt-8 justify-center gap-10 font-bold text-blue-800 z-2 pb-2 select-none">
      <div id="menu-open" className="md:hidden flex fixed left-8"><a onClick={(openNav)}><Menu id="menu"/> <X id="x" className="hidden"/></a></div>
        <div id="logo" className="md:absolute md:left-5 flex items-center justify-center bg-blue top-6">
          <Anchor className="mr-2 " size={35} />
          <p className="titletext text-2xl ml-2">Âncora RH</p>
        </div>
        <div id="linksbar" className=" justify-center md:flex gap-20 opacity-0 md:opacity-100 ">
        
        <a href="#hero-section">Início</a>
        <a href="#servicos-section">Serviços</a>
        <a href="#navbar">Depoimentos</a>
        <a href="#contact-section">Contato</a>
        </div>
    </div>
  )
}

export default NavBar;
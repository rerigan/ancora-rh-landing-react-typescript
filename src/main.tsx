import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './Hero.tsx'
import NavBar from './NavBar.tsx'
import Servicos from './Servicos.tsx'
import Depoimentos from './Depoimentos.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavBar />
    <Hero />
    <Servicos />
    <Depoimentos />
  </StrictMode>,
)


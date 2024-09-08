import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Components/Header'
import Events from './Components/Events'
import Gallery from './Components/Gallery'
import About from './Components/About'
import Menu from './Components/Menu'
import Footer from './Components/Footer'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Events />
    <Gallery />
    <About />
    <Menu />
    <Footer />
  </StrictMode>,
)

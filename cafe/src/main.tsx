import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Components/Header'
import Main from './Components/Main'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Main />
  </StrictMode>,
)

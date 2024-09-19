import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Jsx from './App.jsx'

const root = createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Jsx/>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home.jsx'
import Choice from './Choice.jsx'
import Fyler from './Fyler.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
    {/* <Choice/> */}
    {/* <Fyler/> */}
  </StrictMode>,
)

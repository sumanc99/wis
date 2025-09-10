import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home.jsx'
import Choice from './Choice.jsx'
import Fyler from './Fyler.jsx'
import { BrowserRouter,Routes, Route,} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/choice' element={<Choice/>}/>
        <Route path='/fyler' element={<Fyler/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

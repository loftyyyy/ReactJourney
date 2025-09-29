import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import Board from './components/Board.jsx'
import Game from './components/Game.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/*<App />*/}
    {/*  {<Board/>}*/}
      {<Game/>}
  </StrictMode>,

)

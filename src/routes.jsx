import Favoritos from './components/Favoritos/Favoritos'
import Inicio from './components/Inicio/Inicio'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Player from './components/Player/Player'
import NaoEncontrada from './components/NaoEncontrada/NaoEncontrada'
import PaginaBase from './components/PaginaBase/PaginaBase'

function AppRoutes() {
  return (
    <BrowserRouter>
          <Routes>
              <Route path="/" element={<PaginaBase />}>
              <Route index element={<Inicio />}></Route>
              <Route path="favoritos" element={<Favoritos />}></Route>
              <Route path=":id" element={<Player />}></Route>
              <Route path="*" element={<NaoEncontrada />}></Route>
              </Route>
          </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
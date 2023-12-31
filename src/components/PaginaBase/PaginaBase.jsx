import FavoritosProvider from '../../contextos/Favoritos'
import Cabecalho from '../Cabecalho/Cabecalho'
import Rodape from '../Rodape/Rodape'
import { Outlet } from 'react-router-dom'

const PaginaBase = () => {
  return (
    <main>
      <Cabecalho/>
      <FavoritosProvider>
          <Outlet />
      </FavoritosProvider>
      <Rodape />
    </main>
  )
}

export default PaginaBase

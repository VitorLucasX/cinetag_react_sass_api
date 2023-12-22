import { useFavoritoContext } from '../../contextos/Favoritos'
import Banner from '../Banner/Banner'
import Card from '../Card/Card'
import Titulo from '../Titulo/Titulo'
import './Favoritos.sass'

const Favoritos = () => {
  const { favorito } = useFavoritoContext()
  return (
    <>
    <Banner imagem='favoritos'/>
    <Titulo>
      <h1>Meus Favoritos</h1>
    </Titulo>
    <section className="styless-container">
        {favorito.map((fav) => {
          return <Card {...fav} key={fav.id} />
        })}
    </section>
    </>
  )
}

export default Favoritos

import './Cabecalho.sass'
import { Link } from "react-router-dom"
import logo from './logo.png'
import CabecalhoLink from '../CabecalhoLink/CabecalhoLink'

const Cabecalho = () => {
  return (
    <header className="styles-cabecalho">
        <Link to="./">
            <img src={logo} alt="Logo da Cine Tag" className='logo'/>
        </Link>
        <nav>
            <CabecalhoLink url="./">
                Home
            </CabecalhoLink>
            <CabecalhoLink url="./Favoritos">
                Favoritos
            </CabecalhoLink>
        </nav>
    </header>
  )
}

export default Cabecalho

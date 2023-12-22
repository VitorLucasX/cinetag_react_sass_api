import './CabecalhoLink.sass'
import { Link } from 'react-router-dom'

const CabecalhoLink = ({url, children}) => {
  return (
    <Link to={url} className='styles-link'>
      {children}
    </Link>
  )
}

export default CabecalhoLink

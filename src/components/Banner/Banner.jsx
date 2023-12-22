import './Banner.sass'

const Banner = ({ imagem }) => {
  return (
    <div className='styles-capa' 
        style={{ backgroundImage: `url('/imagens/banner-${imagem}.png')`}}>
    </div>
  )
}

export default Banner

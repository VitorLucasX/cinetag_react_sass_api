import { useEffect, useState } from 'react'
import Banner from '../Banner/Banner'
import Card from '../Card/Card'
import Titulo from '../Titulo/Titulo'
import './Inicio.sass'

const Inicio = () => {
  const [videos, setvideos] = useState([])

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/VitorLucasX/cinetag-api/videos')
    .then(resposta => resposta.json())
    .then(dados => {
      setvideos(dados)
    })
  }, [])
  
  return (
    <>
      <Banner imagem="home"/>
      <Titulo>
        <h1>Um lugar para guardar seus vídeos e filmes!</h1>
      </Titulo>
      <section className='container'>
          {videos.map((video) => {
              return <Card {...video} key={video.id} />
          })}
      </section>
    </>
  )
}

export default Inicio

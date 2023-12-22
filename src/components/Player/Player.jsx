import { useParams } from 'react-router-dom'
import Banner from '../Banner/Banner'
import Titulo from '../Titulo/Titulo'
import './Player.sass'
import NaoEncontrada from '../NaoEncontrada/NaoEncontrada'
import { useEffect, useState } from 'react'

const Player = () => {
  const [video, setVideo] = useState()
  const parametros = useParams()

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/VitorLucasX/cinetag-api/videos?id=${parametros.id}`)
    .then(resposta => resposta.json())
    .then(dados => {
      setVideo(...dados)
    })
  }, [])

  if (!video) {
    return <NaoEncontrada/>
  }

  return (
    <>
      <Banner imagem="player" />
        <Titulo>
            <h1>Player</h1>
        </Titulo>
        <section className="styles-containerr">
            <iframe 
            width="100%"
            height="100%"
            src={video.link}
            title={video.titulo} 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
          </iframe>
        </section>
    </>
  )
}

export default Player

import React from 'react'
import styled from 'styled-components'
import { VideoContexto } from '../../Context/useContext'
import {Trash2} from 'lucide-react'
import { FaEdit } from "react-icons/fa";

const CardStyled = styled.div`
border: 1px solid #000;

`

const Card = ({ video }) => {
    if (!video) {
      return null; // Retorna null ou uma UI alternativa se o vídeo estiver indefinido
    }
  
    const videoId = video.video.split('=')[1];
  

// const Card = () => {
//     const {video} = VideoContexto()
//     console.log(video[1]?.imagem)
  

    return (
    <CardStyled>
           <img src={video[1]?.imagem} alt="" />

           <iframe 
            width="560"
            height="315" 
            // src={`https://www.youtube.com/embed/${video[0]?.video.split("=")[1]}`}
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            />
        <footer>
            <div>
            <FaEdit />
            <Trash2 />
            </div>
        </footer>
    </CardStyled>
  )
}

const CardList = () => {
    const { video } = useContext(VideoContexto);
    
    if (!video || video.length === 0) {
      return <p>Nenhum vídeo encontrado.</p>; // Retorna uma mensagem alternativa se o vídeo estiver indefinido ou vazio
    }
  
    return (
      <div>
        {video.map((item, index) => (
          <Card key={index} video={item} />
        ))}
      </div>
    );
  }
  
  export default CardList;

// export default Card
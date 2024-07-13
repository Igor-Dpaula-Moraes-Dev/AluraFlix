import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const TelaStyled = styled.div`
background-color: var(--dark-grey);
display: flex;
height:80vh;
justify-content: center;
align-items: center;
`
const Tela =styled.iframe`
width: 60vw;
height:70vh;
border-radius: 16px;
border: 1px solid #074996;
box-shadow:  0px 1px 10px  #074996;
@media (max-width: 600px) {
     width: 85vw; // Ajustando a largura para telas menores
     height:35vh;
    font-size: 1rem; // Ajustando o tamanho da fonte para telas menores
    border: 2px solid #ffff; 
  }
`


const PlayVideo = () => {
const [videoApi,setVideosApi]= useState(null);

    const id= useParams ()


async function chamaCard (id){
        const respostaApi=  await fetch(`https://666c940949dbc5d7145e7fe2.mockapi.io/geek/api/aluflix/${id.id}`)
        const  videoConverter = await respostaApi.json()
      const  video={
        ...videoConverter,
        video:videoConverter.video?.split("=")[1]
       }

        return video
 };

 useEffect(()=>{
    
    async function fetchData() {
         const video = await chamaCard(id)
        setVideosApi(video)
        
    }
    fetchData();
 } ,[])


    return (
    <TelaStyled>
            
                {<Tela
             
            // src={`https://www.youtube.com/embed/${videoApi?.video?.split("=")[1]}`}
             src={`https://www.youtube.com/embed/${videoApi?.video}`}
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen 
            />}
            
           
    </TelaStyled>
  )
}

export default PlayVideo
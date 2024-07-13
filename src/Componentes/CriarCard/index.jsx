import React from 'react'
import styled from 'styled-components'
import { Pencil, Trash2, CirclePlay } from 'lucide-react'
import { VideoContexto } from '../../Context/useContext'
import { Link } from 'react-router-dom'


const CardStyled = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 24rem;
  height: 18rem;
  border-radius: .5rem;
  box-shadow: ${props => {
    switch (props.$titulo) {
      case "frontend":
        return "var(--blue-shadow)";
      case "backend":
        return "var(--green-shadow)"
      case "mobile":
        return "var(--yellow-shadow)"
      default:
        return
    }
  }};
  margin-bottom: 1rem;
  flex-shrink: 0;
  transition: all .27s ease-in-out;

  &:hover > figure {
    cursor: pointer;
    filter: grayscale(100%) blur(4px);
    transition: all .27s ease-in-out;
  }

  &:hover > figure > img {
    transform: scale(1.05);
    transition: all .27s ease-in-out;
  }
  @media (max-width: 500px) {
    width: 100%;
    font-size: 1rem;
  }
`
const ImgCard = styled.figure`
/* max-width:90%; */
max-height: 15.25rem;
  display: flex;
  flex: 1;
  max-height: 244px;
  /* z-index: -10; */
  color: #F7F7F7;
  font-size: 1.1rem;
  transition: all .27s ease-in-out;

  &:hover > figure {
    cursor: pointer;
    filter: grayscale(100%) blur(4px);
    transition: all .27s ease-in-out;
  }

&>img{
    display: block;
    width: 100%;
    object-fit:cover;
    border-radius: 0 0 2% 2%;
    -webkit-mask-image: linear-gradient(to bottom, black 0% ,transparent 97%);
    mask-image: linear-gradient(to bottom, black 0% ,transparent 97%);
    transition: all .27s ease-in-out;
}
&:hover > figure > img {
    transform: scale(1.05);
    transition: all .27s ease-in-out;
  }

  &:hover:not(footer ~) {
    filter: grayscale(100%);
    transition: all .27s ease-in-out;
  }

  @media screen and (width < 600px) {
    & {
      transform: scale(0.85);
    }
  }
`
const FooterStyled = styled.footer`
display: flex;
justify-content: space-around;
align-items: center;
height: 18%;

`
const Icon = styled.button`
display: flex;
align-items: center;
font-size:1.3rem ;
color: #fff;
background-color: transparent;
z-index: 10;

@media (max-width: 500px) {
    font-size: 0.3rem;
  }
`
const Assistir = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0; 
  transform: translate(60%, 35%);
  opacity: 0;
  transition: all .27s ease-in-out;

  &:hover {
    opacity: 1;
    transition: all .27s ease-in-out;
  }

  & > a {
    position: absolute;
    top:-20px;
    left: -90px;
    width: 100%;
    height: 100%;
    color: ${props => {
    switch (props.$titulo) {
      case "frontend":
        return "var(--light-blue)"
      case "backend":
        return "var(--light-green)"
      case "mobile":
        return "var(--light-yellow)"
      default:
        return "#F7F7F7"
    }
  }};
  }
  
  &:hover > * {
    filter: ${props => {
    switch (props.$titulo) {
      case "frontend":
        return "drop-shadow(20px 15px 50px var(--light-blue))"
      case "backend":
        return "drop-shadow(20px 15px 50px var(--light-green))"
      case "mobile":
        return "drop-shadow(20px 15px 50px var(--light-yellow))"
      default:
        return "drop-shadow(20px 15px 50px rgba(222, 222, 222, .7))"
    }
  }};
  backdrop-filter: brightness(-2);
  transition: all .27s ease-in-out;
  }
`

const Card = ({ video, img, titulo,id }) => {
  const contexto = VideoContexto()
    

    if (!video) {
        return null; // Retorna null ou uma UI alternativa se o vídeo estiver indefinido
    }
    
    const {toggleModal} = VideoContexto() 

      
    const  apagarCard = async ()=>{

      await fetch(`https://666c940949dbc5d7145e7fe2.mockapi.io/geek/api/aluflix/${id}`,{
        method: "DELETE"
        
      })
      const newVideos = contexto.video?.filter(video => video.id !== id)
      contexto.setVideo(newVideos)
     }
    return (
        <CardStyled $titulo={titulo}>
            <ImgCard>
           
                <img src={img} alt="" />
            </ImgCard>


         
            <FooterStyled>
            
                <Icon onClick={()=> toggleModal(titulo,id)}>
                    <Pencil/>
                </Icon>
                <Icon onClick={apagarCard}>
                    <Trash2 />
                </Icon>
                <Assistir $titulo={titulo}>
           
          <      Link to={`video/${id}`}>
                <CirclePlay strokeWidth={`1px`} size={90} />
             
                </Link>
                </Assistir>
               
            </FooterStyled>

        </CardStyled>
    )
}


export default Card
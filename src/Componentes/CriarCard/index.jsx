import React from 'react'
import styled from 'styled-components'
import { Pencil, Trash2 } from 'lucide-react'
import { VideoContexto } from '../../Context/useContext'


const CardStyled = styled.div`
border-radius: 0.7rem;
width:27rem;
height: 19rem;
background-color: #101110;

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

`
const FooterStyled = styled.footer`
display: flex;
justify-content: space-around;
align-items: center;
/* min-height: 10%; */
min-height: 15%;
/* padding-bottom: .5rem; */
`
const Icon = styled.button`
display: flex;
align-items: center;
font-size:1.3rem ;
color: #fff;
background-color: transparent;
`

const Card = ({ video, img }) => {
    console.log(video)
    if (!video) {
        return null; // Retorna null ou uma UI alternativa se o vídeo estiver indefinido
    }

    const videoId = video?.split('=')[1];


    // const Card = () => {
    //     const {video} = VideoContexto()
    //     console.log(video[1]?.imagem)

    
    const {toggleModal} = VideoContexto() 

    return (
        <CardStyled>
            <ImgCard>
                <img src={img} alt="" />
            </ImgCard>


            {/* <iframe 
            width="560"
            height="315" 
            // src={`https://www.youtube.com/embed/${video[0]?.video.split("=")[1]}`}
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen 
            />*/}
            <FooterStyled>
            
                <Icon onClick={()=> toggleModal()}>
                    <Pencil/>
                </Icon>
                <Icon>
                    <Trash2 />
                </Icon>



            </FooterStyled>

        </CardStyled>
    )
}


export default Card
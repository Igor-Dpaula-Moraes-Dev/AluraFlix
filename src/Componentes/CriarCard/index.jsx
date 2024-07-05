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
/* width:100%; */

&>img{
    display: block;
    width:100%;
}
`
const FooterStyled = styled.footer`
display: flex;
justify-content: space-around;
align-items: center;
height: 10%;
padding-bottom: .5rem;
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
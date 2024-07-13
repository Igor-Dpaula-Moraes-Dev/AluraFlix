import React from 'react'
import styled from 'styled-components'
import bannerPrincipal from '/imagens/player.png'
import Tag from '../Tag'
const BannerStyle = styled.div`
 height:75vh;
 position: relative;
 overflow: hidden;
 border: 1px solid  #2271D1 ;
  box-shadow: 7px 5px 7px #2271D1 inset;
  z-index: 0;
  
 & >img{
     width: 100%;
     height: 100%;
     object-fit: cover; 
    /* opacity:.8; */
     display: block; 
    transition: opacity 0.3s ease; 
    filter: brightness(0.4) contrast(1) saturate(0.9); 
    z-index: -999;
   
    
 }
 /* &::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 80vh;
  top: 0;
  left: 0;
  background-image: url(${bannerPrincipal});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: var(--blue-shadow);
  filter: opacity(.4);
    } */
  /*  */
     & >section{

    position: absolute;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border: 2px solid #2271D1; */
    color: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1300px;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    z-index: 1;
    gap: 2rem;
    @media (max-width: 1270px) {
      flex-direction: column;
      width: 90%;
      padding: 10px;
      gap: 1rem;
    }
    @media (max-width: 768px) {
      top: 60%;
      width: 95%;
    }
   
     }
     & section >img{
      border: 2px solid #2271D1;
      border-radius: 16px;
      @media (max-width: 1270px) {
      max-width: 100%;
    }

      }
       display: flex; 
     
     & > section > div{
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap:.5rem;
      width:52rem;
      height: 20rem;
    // background-color: #d11717; 
    @media (max-width: 1270px) {
      width: 100%;
    }

    @media (max-width: 840px) {
      align-items: center;
      text-align: center;
    }
     }
     & > section > div>h3{
      font-size: 2rem;
      text-align: left;
      @media (max-width: 768px) {
      font-size: 1.5rem;
    }

    @media (max-width: 840px) {
      text-align: center;
    }
     }
     & > section > div>p{
      text-align: left;

      @media (max-width: 768px) {
      font-size: .7rem;
    }

    @media (max-width: 840px) {
      text-align: center;
    }
     }
`



const Banner = () => {
  return (
    <BannerStyle>
      <img src={bannerPrincipal}></img>

      <section>
        <div>
          <Tag tipo={"banner"}>FRONT END</Tag>
          <h3>SEO com React</h3>
          <p>Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React,
            ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel.
            Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"!</p>
        </div>
        <img src={bannerPrincipal}></img>
      </section>
    </BannerStyle>



  )
}

export default Banner
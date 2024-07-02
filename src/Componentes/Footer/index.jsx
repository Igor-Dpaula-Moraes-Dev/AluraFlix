import React from 'react'
import styled from "styled-components"
import LogoMain from "/imagens/LogoMain.png"

const FooterStyle = styled.footer`
display: flex;
justify-content:center;
background-color:#000;
min-height:10vh;

& >img{
  display: block;
  object-fit: contain;

}

`

const Footer = () => {
  return (
    <FooterStyle>
      <img src={LogoMain}/>
    </FooterStyle>
  )
}

export default Footer
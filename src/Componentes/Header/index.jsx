
import React from 'react'
import styled from "styled-components"
import LogoMain from "/imagens/LogoMain.png"
import { Link } from 'react-router-dom'


const CabecalhoStyle = styled.header`
padding: .8rem 2rem;
background-color: #000;
width: 100%;
height: 4.3rem;
@media (max-width: 500px) {
 height:6rem;

  }
& >nav{
display: flex;
justify-content: space-between;
align-items: center;
@media (max-width: 500px) {
    flex-direction:column;

 gap: .5rem;
  }
}
& >nav>div{
    display: flex;
    justify-content: space-evenly;
  
    gap:.5rem;
    @media (max-width: 500px) {
  
    padding:.3rem;
    margin-bottom: .5rem;
    

        
  }
}
& >nav>div>a{
    width:8rem;
    line-height: 2lh;
    border: 2px solid #fff;
    border-radius:.4rem;
    font-size: 1rem;
    font-weight: 600;
    text-transform: uppercase;
    background-color: transparent;
    color: var(--font-white);
    font-family: var(--font-source-sans);
    transition: 0.37s ease-out;
    text-decoration: none;
    text-align: center;
    justify-content: center;
    align-items: center;
    display: flex;
    @media (max-width: 500px) {
    border: 1px solid #1a07c9;
     width:5rem;
    height:1.5rem ;
    font-size:.7rem ;
    font-weight: 400;
    box-sizing: content-box;
    box-shadow: 0px 0px 6px #fff ;
   
    
  
 
   

    

  }
}
& >nav>div>a:hover{
    color: var(--standard-blue);
    border-color: var(--standard-blue);
    box-shadow: var(--blue-shadow-button);
    transition: 0.52s ease-out;
}

`


const Header = () => {
    return (
        <CabecalhoStyle >
            <nav>
                <img src={LogoMain} alt="logo principal" />
                <div>
                    <Link to={'/'} >Home</Link>
                    <Link to={'cadastro'} >Novo Video</Link>
                </div>
            </nav>
        </CabecalhoStyle>
    )
}

export default Header
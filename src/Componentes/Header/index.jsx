
import React from 'react'
import styled from "styled-components"
import LogoMain from "/imagens/LogoMain.png"


const CabecalhoStyle = styled.header`
padding: .8rem 2rem;
background-color: #000;
width: 100%;
height: 4.3rem;
& >nav{
display: flex;
justify-content: space-between;
align-items: center;
}
& >nav>div{
    display: flex;
    justify-content: space-evenly;
    gap:.5rem;
}
& >nav>div>button{
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
}
& >nav>div>button:hover{
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
                    <button>Home</button>
                    <button>Novo Video</button>
                </div>
            </nav>
        </CabecalhoStyle>
    )
}

export default Header
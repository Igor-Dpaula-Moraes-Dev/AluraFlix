import React, { Children } from 'react'
import styled from 'styled-components'
const TagStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--font-white);
  background-color:${props => {
    switch (props.$section) {
      case 'Frontend':
        return "var(--standard-blue)"

      case 'Backend':
        return "var(--light-green)"
      case 'Mobile':
        return "var(--light-yellow)"
      default:
        return "var(--standard-blue)"
    }
  }};
   
border-radius: 1rem;
width:${props => props.$tipo === "banner" ? "20rem" : "27rem"};
height: ${props => props.$tipo === "banner" ? "" : "4.37rem"};
font-family: var(--font - source - sans);
font-weight: 800;
font-size:${props => props.$tipo === "banner" ? "3.17rem" : "2rem"};
/* font-size:3.17rem; */
white-space: nowrap;
gap: 1rem;
padding: 0.5rem 1rem;
`

const Tag = ({ children, tipo, secao }) => {

  return (
    <TagStyled $tipo={tipo} $section={secao}>
      {children}
    </TagStyled>

  )
}

export default Tag
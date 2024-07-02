import React, { Children } from 'react'
import styled from 'styled-components'
 const TagStyled = styled.div`
  /* width: 1rem;
  height: 1rem; */
  color: var(--font-white);
  background-color: var(--standard-blue);
  border-radius: 1rem;
  width:${props=> props.$tipo ==="banner"? "18rem":"6rem"} ;
  height: ;
  font-family: var(--font-source-sans);
  font-weight: 800;
  font-size:3.17rem;
  white-space: nowrap;
  gap: 1rem;
   padding: 0.5rem 1rem; 
 `
const Tag = ({children,tipo}) => {
  return (
    <TagStyled $tipo={tipo}>
       {children}
    </TagStyled>
    
  )
}

export default Tag
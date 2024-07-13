import React from 'react'
import styled from 'styled-components'
import { CircleX } from 'lucide-react'
import { VideoContexto } from '../../Context/useContext'
import FormModal from './FormularioModal'

const Wrapper = styled.dialog`
/* display: flex; */
overflow: auto;
scrollbar-width: none;
z-index: 20;
::-webkit-scrollbar {
  display: none;
}
position: fixed;
top: 50%;
left:50%;
transform: translate(-50%,-50%); 
min-height: 70vh;
max-height: 95vh;
width:68vw;
border-radius: 0.7rem;
background: #03122f;
color: #fff;
border:2px solid #fff;
justify-content: center;
align-items: center;
padding: 2rem;
box-shadow: 0px 0px 15px var(--standard-blue); 
 @media (max-width: 1380px) {
    width:65%; 
   
  }
  @media (max-width: 475px) {
    left:48%;
}

`

const IconeFechamento = styled.button`
position:absolute;
top: 1rem;
right: 1rem;
border: none;
cursor: pointer;

display: flex;
/*justify-content: end;
padding: 1rem; */
background-color: transparent;
color: #fff;
`
const Modal = () => {
  
   
 const   {openModal,toggleModal}=VideoContexto()
    return (
        <Wrapper open={openModal}>
            <IconeFechamento
            onClick={toggleModal}
            >
                <CircleX size={30}   />
            </IconeFechamento>
            <FormModal/>
        </Wrapper>

    )
}

export default Modal
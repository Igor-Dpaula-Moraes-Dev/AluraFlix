import React from 'react'
import styled from 'styled-components'

export const CaixaForm =styled.div`
display: flex;
justify-content: center;
`
const Forms = styled.form`
display: flex;
/* position:; */
width: 70%;
flex-direction:column;
/* border: 2px solid #d3d010; */
align-items:center;
gap:2rem;
 height:fit-content;
max-width: 60rem;
padding:5px;
`
export const Label = styled.label`
 display: flex;
 gap: 1rem; 
 flex-direction: column;
 gap: 0.5rem;
 color:#fff;
/* border: 2px solid #eb1717; */
`
export const InputModalStyled = styled.input`
width: 25rem;
height: 3.85rem;
border: 2px solid #fff;
border-radius: 16px;
padding: 0.5rem;
background-color: transparent;
color: var(--font-white);
border: 2px solid var(--light-blue);

`
const TitleForm = styled.h1`
font-size: 3.5rem;
font-family: var(--font-roboto);
color: var(--standard-blue);
text-align:center;
;
`
export const SelectStyled = styled.select`
display: flex;
width: 25rem;
height: 3.85rem;
border: 2px solid #fff;
border-radius: 16px;
padding: 0.5rem;
background-color: transparent;
color:#fff;
border: 2px solid var(--light-blue);
& >option{
  
  color: #000;
}
`
export const TextAreaStyled = styled.textarea`
/* display: flex; */
background: transparent;
color:#fff;
border: 2px solid var(--light-blue);
border-radius: 15px;
width: 25rem; 
height: 7rem;
padding: 0.5rem;
resize: none;
overflow: auto;
`
export const CaixaButtonStyled = styled.div`
display: flex;
width: 68%;
justify-content: space-between;
align-items: center;
gap: 5rem;

padding: .5rem;
`
export const ButtonStyled = styled.button`
width: 11.25rem; 
max-width: 20rem;
border-radius: 16px;
padding: .5rem;
border: 2px solid var(--light-blue);
/* background: #03122f; */
background-color: transparent;
color: #fff;
cursor: pointer;
&:hover{
  box-shadow: var(--blue-shadow-button) ;

}
`


const FormModal = () => {
  return (

    <CaixaForm>
      <Forms>
      <TitleForm>Editar Card</TitleForm>
      <Label htmlFor='title'>Titulo
        <InputModalStyled 
          placeholder='teste'
          name='title'
          id='title' 
         />
      </Label>
      <Label htmlFor='categoria'>Categorias
        <SelectStyled htmlFor='categoria' >
          <option selected>Escolha Uma categoria</option>
          <option>Front-End</option>
          <option>Back-End</option>
          <option>Mobile</option>
       </SelectStyled>
      </Label>
      
      <Label htmlFor='imagem'>Imagem
        <InputModalStyled 
          placeholder='insira a url da imagem'
          name='imagem' 
          id='imagem' 
          type='url'
       />
      </Label>
      <Label htmlFor='video'>Video
        <InputModalStyled 
        placeholder='insira a url do video' 
        name='video' 
        id='video' 
        type='url' 
      />
      </Label>
      <Label htmlFor='descricao'>Descrição
        <TextAreaStyled id='descricao' name='descricao'/>
      </Label>
      <CaixaButtonStyled>
          <ButtonStyled type='submit' onClick={(e)=>{
            e.preventDefault()
          }}>Guardar</ButtonStyled>
          <ButtonStyled type='button' onClick={(e)=>{
            e.preventDefault()
          }}>Limpar</ButtonStyled>
      </CaixaButtonStyled>
     
      </Forms>
    </CaixaForm>
    

  )
}

export default FormModal

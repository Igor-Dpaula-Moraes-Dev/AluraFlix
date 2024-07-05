import React from 'react'
import styled from 'styled-components'


const Forms = styled.form`
 display: flex; 
 flex-direction:column;
border: 2px solid #d3d010;
align-items:center;
gap:2rem;
/* height:fit-content; */
max-width: 60rem;
/* overflow: hidden; */
`
const Label = styled.label`
 display: flex;
 gap: 1rem; 
flex-direction: column;
gap: 0.5rem;
/* border: 2px solid #eb1717; */
`
const InputModalStyled = styled.input`

 width: 35rem;
height: 3.85rem;
border: 2px solid #fff;
border-radius: 16px;
padding: 0.5rem;

`
const TitleForm = styled.h1`
font-size: 3.5rem;
font-family: var(--font-roboto);
color: var(--standard-blue);
text-align:center;
;
`
const SelectStyled = styled.select`
 display: flex;
width: 35rem;
height: 3.85rem;
border: 2px solid #fff;
border-radius: 16px;
padding: 0.5rem;
`
const TextAreaStyled = styled.textarea`
/* display: flex; */
width: 35rem; 
height: 7rem;
border: 2px solid #fff;
padding: 0.5rem;
`
const CaixaButtonStyled = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
`
const ButtonStyled = styled.button`
width: 11.25rem; 
max-width: 20rem;
border-radius: 16px;
padding: 1rem;
  border: 2px solid #fff;
  background: #03122f;
  color: #fff;
  cursor: pointer;

`

const FormModal = () => {
  return (

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
          <ButtonStyled type='submit'>Guardar</ButtonStyled>
          <ButtonStyled type='button'>Limpar</ButtonStyled>
      </CaixaButtonStyled>
     
      </Forms>

  )
}

export default FormModal

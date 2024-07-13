import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { VideoContexto } from '../../../Context/useContext'

export const CaixaForm =styled.div`
display: flex;
justify-content: center;

`
const Forms = styled.form`
display: flex;
/* position:; */
width: 70%;
flex-direction:column;
 /*border: 2px solid #d3d010; */
align-items:center;
gap:2rem;
 height:fit-content;
max-width: 60rem;
padding:5px;
@media (max-width: 874px) {
    width:100%; 
  }
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
box-shadow: 0px 0px 9px #fff;
@media (max-width: 852px) {
    width:60vw; 
  }

`
const TitleForm = styled.h1`
font-size: 3.5rem;
font-family: var(--font-roboto);
color: var(--standard-blue);
text-align:center;
@media (max-width: 500px) {
  width:100%; 
  font-size:1.70rem;
  
  }
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
box-shadow: 0px 0px 9px #fff;
& >option{
  
  color: #000;
}
@media (max-width: 882px) {
  width:60vw; 
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
box-shadow: 0px 0px 9px #fff;
@media (max-width: 852px) {
  width:60vw; 
  }
`
export const CaixaButtonStyled = styled.div`
display: flex;
width: 68%;
justify-content: space-between;
align-items: center;
gap:1rem;
padding: .5rem;
@media (max-width: 640px) {
  width:100%; 
  flex-direction: column;
  }
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
@media (max-width: 500px) {
  width:100%; 
  font-size:1rem;
  
  }
`


const FormModal = () => {
  const {videoAtual,setVideo:videoAtualizado,setOpenModal}= VideoContexto()
  const [video ,setVideo]= useState (null)
  const atualizarVideo =async(e)=>{ 
    e.preventDefault()
  await fetch (`https://666c940949dbc5d7145e7fe2.mockapi.io/geek/api/aluflix/${video.id}`,{
    method:"PUT",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(video),
  })
  setVideo({
    titulo: '',
    categoria: '',
    imagem: '',
    video: '',
    descricao: '',
  })
   const guardarVideo =await fetch('https://666c940949dbc5d7145e7fe2.mockapi.io/geek/api/aluflix')
   const resposta= await guardarVideo.json()
   videoAtualizado(resposta)
    setOpenModal(estado=> !estado)
  }
  
  useEffect(()=>{
    setVideo(()=>({...videoAtual}))

   },[videoAtual])

  return (

    <CaixaForm>
      <Forms>
      <TitleForm>Editar Card</TitleForm>
      <Label htmlFor='title'>Titulo
        <InputModalStyled 
          placeholder='teste'
          name='title'
          id='title'
          value= {video?.titulo}
          onChange={(e) => setVideo(video => ({ ...video, titulo: e.target.value }))}
         />
      </Label>
      <Label htmlFor='categoria'>Categorias
        <SelectStyled 
        htmlFor='categoria'
        value={video?.categoria} 
        onChange={(e) => setVideo(video => ({ ...video, categoria: e.target.value }))} >
          <option selected>Escolha Uma categoria</option>
          <option value={"frontend"}>Front-End</option>
          <option value={"backend"}>Back-End</option>
          <option value={"mobile"}>Mobile</option>
       </SelectStyled>
      </Label>
      
      <Label htmlFor='imagem'>Imagem
        <InputModalStyled 
          placeholder='insira a url da imagem'
          name='imagem' 
          id='imagem' 
          type='url'
          value={video?.imagem}
          onChange={(e) => setVideo(video => ({ ...video, imagem: e.target.value }))}
       />
      </Label>
      <Label htmlFor='video'>Video
        <InputModalStyled 
        placeholder='insira a url do video' 
        name='video' 
        id='video' 
        type='url' 
        value={video?.video}
        onChange={(e) => setVideo(video => ({ ...video, video: e.target.value }))}
      />
      </Label>
      <Label htmlFor='descricao'>Descrição
        <TextAreaStyled 
        id='descricao' 
        name='descricao'
        value={video?.descricao}
        onChange={(e) => setVideo(video => ({ ...video, descricao: e.target.value }))}
        />
      </Label>
      <CaixaButtonStyled>
          <ButtonStyled type='submit' onClick={(e)=>{
          atualizarVideo(e)
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

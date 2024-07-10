import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import  {
     ButtonStyled, 
     InputModalStyled,
     Label,
     SelectStyled, 
     TextAreaStyled 
    } from '../../Componentes/Modal/FormularioModal'

const MainStyled = styled.main`
background-color: var(--dark-grey);
height: fit-content;
overflow: hidden;
font-family: var( --font-roboto);
padding: 0 3rem;
scrollbar-width:thin;
`
const TitleStyled = styled.h1`
font-size: 3.75rem;
text-align: center;
color: var(--font-white);
`
const SubTitle = styled.h3`
font-size: 1.25rem;
text-align: center;
color: var(--font-white);
font-family: var( --font-roboto);
`
const CaixaCadastro = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
gap: 1rem;
`
const TitleContainer = styled.h2`
font-size:2.25rem ;
font-family:var(--font-source-sans) ;
font-weight: 500;
color: #fff;
text-align: left;
width: 100%;

`
const ContainerFirst = styled.div`
display: flex;
width: 100%;
gap: 2rem;
`
const InputHover =styled.input`
width: 25rem;
height: 3.85rem;
border: 2px solid #fff;
border-radius: 16px;
padding: 0.5rem;
background-color: transparent;
color: var(--font-white);
border: 2px solid var(--light-blue);

`
const ErrorMessage = styled.p`
  color: red;
  font-size: 0.875rem;
`;
const ErroStyled = styled.div`
display: flex;
flex-direction: column;
gap: .5rem;

`

const Cadastro = () => {
 const [formData,setFormData]= useState({
  
  titulo:'',
  categoria:'',
  imagem:'',
  video:'',
  descricao:'',

 });
 const [errors,setErrors]= useState({});

useEffect(()=>{
  console.log(formData)
},[formData])

 const validate =()=>{
  const newErrors ={};
  if (!formData.titulo) newErrors.titulo = 'Título é obrigatório';
    if (!formData.categoria) newErrors.categoria = 'Categoria é obrigatória';
    if (!formData.imagem) newErrors.imagem = 'URL da imagem é obrigatória';
    if (!formData.video) newErrors.video = 'URL do vídeo é obrigatória';
    if (!formData.descricao) newErrors.descricao = 'Descrição é obrigatória';
    return newErrors;
 }
 const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
  });
};
const handleSubmit = async (e) => {
  e.preventDefault();
 
  // const handleCategoriaChange = (e) => {
  //   const categoria = e.target.value;
  //   setFormData({ ...formData, categoria });
  // };

  const validationErrors = validate();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  setErrors({});

try {
      const response = await fetch('https://666c940949dbc5d7145e7fe2.mockapi.io/geek/api/aluflix', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
console.log(response)
      if (response.ok) {
        console.log('Formulário enviado com sucesso!');
        setFormData({
          titulo: '',
          categoria: '',
          imagem: '',
          video: '',
          descricao: '',
        });
      } else {
        console.error('Erro ao enviar o formulário.');
        console.log(response)
      }
    } catch (error) {
      console.error('Erro:', error);
    }
  };

  const handleClear = () => {
    setFormData({
      titulo: '',
      categoria: '',
      imagem: '',
      video: '',
      descricao: '',
    });
    setErrors({});
  };
  return (
    <MainStyled>
    <TitleStyled>
        NOVO VIDEO
    </TitleStyled>
    <SubTitle>Complete o formulário para criar um novo card de vídeo.</SubTitle>
   <CaixaCadastro>
    <TitleContainer> Criar Card</TitleContainer>
<ContainerFirst>
     <ErroStyled>
       <Label  htmlFor='titulo'> Titulo
            <InputModalStyled name='titulo' 
            placeholder='Titulo'
            onChange={handleChange}
            value={formData.titulo}
            />
        </Label>
        {errors.titulo && <ErrorMessage>{errors.titulo}</ErrorMessage>}
     </ErroStyled>
    <ErroStyled>
      <Label >Categorias
        <SelectStyled 
        name='categoria'
        onChange={handleChange} 
        value={formData.categoria} >
          <option disabled value=''>Escolha Uma categoria</option>
          <option value='frontend'>Front-End</option>
          <option value='backend'>Back-End</option>
          <option value='mobile'>Mobile</option>
       </SelectStyled>
      </Label>
      {errors.categoria && <ErrorMessage>{errors.categoria}</ErrorMessage>}
    </ErroStyled>
        
</ContainerFirst>
     <ContainerFirst>
      <ErroStyled>
         <Label htmlFor='imagem'>Imagem
        <InputHover
          placeholder='insira a url da imagem'
          name='imagem' 
          id='imagem' 
          type='url'
          required
          onChange={handleChange}
          value={formData.imagem}
       />
      </Label>
      {errors.imagem && <ErrorMessage>{errors.imagem}</ErrorMessage>}
      </ErroStyled>
    <ErroStyled>
       <Label htmlFor='video'>Video
        <InputHover
        placeholder='insira a url do video' 
        name='video' 
        id='video' 
        type='url' 
        required
        onChange={handleChange}
        value={formData.video}
        />
      </Label>
      {errors.video && <ErrorMessage>{errors.video}</ErrorMessage>} 
    </ErroStyled>
     
    </ContainerFirst>  
    <ContainerFirst>
      <ErroStyled>
        <Label htmlFor='descricao'>Descrição
        <TextAreaStyled 
        id='descricao' 
        name='descricao' 
        onChange={handleChange} 
        value={formData.descricao}/>
      </Label>
      {errors.descricao && <ErrorMessage>{errors.descricao}</ErrorMessage>}
      </ErroStyled>
        
    </ContainerFirst>
    
        <ContainerFirst>
           <ButtonStyled onClick={handleSubmit}>Guardar</ButtonStyled>
           <ButtonStyled onClick={handleClear}>Limpar</ButtonStyled>
            
        </ContainerFirst>
            
       
   </CaixaCadastro>
    
 
    </MainStyled>
    ) 
}

export default Cadastro
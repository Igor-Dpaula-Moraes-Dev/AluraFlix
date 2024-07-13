import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import  {
     ButtonStyled, 
     InputModalStyled as OriginalInputModalStyled,
     Label,
     SelectStyled as OriginalSelectStyled, 
     TextAreaStyled as OriginalTextAreaStyled
    } from '../../Componentes/Modal/FormularioModal'
import { useNavigate } from 'react-router-dom'
import { VideoContexto } from '../../Context/useContext'

const MainStyled = styled.main`
display: flex;
flex-direction: column;
/* flex: 1; */
background-color: var(--dark-grey);
 min-height:90vh;
overflow:hidden;
font-family: var( --font-roboto);
padding:3rem;
scrollbar-width:thin;
`
const TitleStyled = styled.h1`
font-size: 3.75rem;
text-align: center;
color: var(--font-white);
  
@media (max-width: 800px) {
    width: 100%;
    font-size:2.25rem;
  }
  @media (max-width: 500px) {
 font-size:2rem;
}
`
const SubTitle = styled.h3`
font-size: 1.25rem;
text-align: center;
color: var(--font-white);
font-family: var( --font-roboto);
@media (max-width: 800px) {
  font-size:1rem;
  }
  @media (max-width: 500px) {
 font-size:.9rem;
}
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
@media (max-width: 800px) {
 font-size:1.75rem;
}
@media (max-width: 500px) {
 font-size:1.40rem;
}


`
const ContainerFirst = styled.div`
display: flex;
width: 100%;
gap: 2rem;
  
@media (max-width: 882px) {
    width: 100%;
    font-size:1rem;
   
  }

  @media (max-width: 562px) {
   flex-direction: column;
  }
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
@media (max-width: 882px) {
    width: 100%;
    font-size:1rem;
  
  }

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
const SelectStyled = styled(OriginalSelectStyled)`
  width: 25rem; // Largura padrão
  height: 3.85rem; // Altura padrão
  border: 2px solid var(--light-blue);
  border-radius: 16px;
  padding: 0.5rem;
  background-color: transparent;
  color: var(--font-white);

  @media (max-width: 882px) {
    width: 100%; // Ajustando a largura para telas menores
    font-size: 1rem; // Ajustando o tamanho da fonte para telas menores
  }
`
const InputModalStyled = styled(OriginalInputModalStyled)`
  width: 25rem; // Largura padrão
  height: 3.85rem; // Altura padrão
  border: 2px solid var(--light-blue);
  border-radius: 16px;
  padding: 0.5rem;
  background-color: transparent;
  color: var(--font-white);

  @media (max-width: 882px) {
    width: 100%; // Ajustando a largura para telas menores
    font-size: 1rem; // Ajustando o tamanho da fonte para telas menores
  }
`
const TextAreaStyled = styled(OriginalTextAreaStyled)`
  width: 25rem; // Largura padrão
  height: 3.85rem; // Altura padrão
  border: 2px solid var(--light-blue);
  border-radius: 16px;
  padding: 0.5rem;
  background-color: transparent;
  color: var(--font-white);
resize: none;
  @media (max-width: 882px) {
    width: 100%; // Ajustando a largura para telas menores
    font-size: 1rem; // Ajustando o tamanho da fonte para telas menores
  }
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
const navegar= useNavigate()
const {setVideo} = VideoContexto()

useEffect(()=>{
 
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
        await response.json();
        setVideo(estado => ([...estado, response]))
        navegar("/");

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
        <Label htmlFor='descricao'> Descrição
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
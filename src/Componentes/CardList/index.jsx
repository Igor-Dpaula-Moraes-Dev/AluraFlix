
import { VideoContexto } from "../../Context/useContext";
import Card from "../CriarCard";
import styled from "styled-components";
import Tag from "../Tag";


const Secao = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`
const Videos = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.3rem;
  overflow: auto;
  scrollbar-width:  thin;
  scrollbar-color:${props=>{
    switch (props.$secao){
      case "frontend":  
      return "#6BD1FF #FFF"
      case "backend": 
      return "#00C86F #000"
      case "mobile": 
      return"#FFBA05 #FFF"
    }
  }};
   &::-webkit-scrollbar-track {
    ${props=>{
    switch (props.$secao){
      case "frontend":  
      return "#6BD1FF #FFF"
      case "backend": 
      return "#00C86F #000"
      case "mobile": 
      return"#FFBA05 #FFF"
    }
  }};

  }

  &::-webkit-scrollbar {
    ${props=>{
    switch (props.$secao){
      case "frontend":  
      return "#6BD1FF #FFF"
      case "backend": 
      return "#00C86F #000"
      case "mobile": 
      return"#FFBA05 #FFF"
    }
  }};
  }

  &::-webkit-scrollbar-thumb {
    ${props=>{
    switch (props.$secao){
      case "frontend":  
      return "#6BD1FF #FFF"
      case "backend": 
      return "#00C86F #000"
      case "mobile": 
      return"#FFBA05 #FFF"
    }
  }};
  }
  
  /* scrollbar-darkshadow-color: #e9f5f3; */
  max-height:40rem ;
 
`
const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3rem;
 padding: 1rem 3rem;
  background-color: var(--dark-grey);
` 
  

const CardList = () => {
  const { video,categorias} = VideoContexto()


  if (!video || video.length === 0)/* {*/
    return <p>Nenhum vídeo encontrado.</p>; // Retorna uma mensagem alternativa se o vídeo estiver indefinido ou vazio
  // }
  // const categorias = [
  //   { nome: "Frontend", videos: video.filter(video => video.categoria === "frontend") },
  //   { nome: "Backend", videos: video.filter(video => video.categoria === "backend") },
  //   { nome: "Mobile", videos: video.filter(video => video.categoria === "mobile") },
  // ]
  return (

  

    <Wrapper>
      {categorias?.map((secao) => (
        <Secao key={secao.nome}>
          <Tag secao={secao.nome}>
            {secao.nome}
          </Tag>
          <Videos $secao={secao.nome}>
            {secao.videos.map((video, index) => {
              return <Card key={index} img={video.imagem} video={video.video} titulo={video.categoria} id={video.id}/>
            })}
          </Videos>
        </Secao>
      ))}
    </Wrapper>
  );
}

export default CardList;


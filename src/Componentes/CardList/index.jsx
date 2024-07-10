
import { VideoContexto } from "../../Context/useContext";
import Card from "../CriarCard";
import styled from "styled-components";
import Tag from "../Tag";
import { useEffect } from "react";

// const CardVideoStyled = styled.main`
// display: flex;
// /* justify-content:space-between; */
// flex-wrap: nowrap;
// flex-direction: column;
// width: 84rem;
// height: 92rem;
// padding: 2rem;
// gap:1rem;
// background-color: var(--dark-grey);


//  & > div> div {
//   display: flex;
//   /* width: 84rem; */
//   max-width: 87rem;
//   align-items: end;
//   height: 27.094rem;
//   /* background-color: red; */
//   border: 1px solid #0e32d1;
// } 
// & > div> div> div {
//    display: flex; 
//   max-width:84rem;
//   overflow: hidden;
//   border: 2px solid #d1150e;
//   height: 20.34rem;
//   background-color: #0bbe0b;
// }
// & > div> div> div>div {

//   max-width:27rem;
//   overflow: hidden;
//   border: 2px solid #d10e86;
//   height: 19rem;
//   background-color: #f2f3f2;
// }
// `
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
  scrollbar-width: thin;
  scrollbar-color: #0657a3;
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
  const { video } = VideoContexto()
  console.log(video)

  const categorias = []

  useEffect(() => {
    if (!video || video.length === 0) {
      return <p>Nenhum vídeo encontrado.</p>; // Retorna uma mensagem alternativa se o vídeo estiver indefinido ou vazio
    }
    categorias = [
      { nome: "Frontend", videos: video.filter(video => video.categoria === "frontend") },
      { nome: "Backend", videos: video.filter(video => video.categoria === "backend") },
      { nome: "Mobile", videos: video.filter(video => video.categoria === "mobile") },
    ]
  }, [video])

  return (



    <Wrapper>
      {categorias?.map((secao) => (
        <Secao key={secao.nome}>
          <Tag secao={secao.nome}>
            {secao.nome}
          </Tag>
          <Videos>
            {secao.videos?.map((video, index) => {
              return <Card key={index} img={video.imagem} video={video.video} titulo={video.categoria} id={video.id} />
            })}
          </Videos>
        </Secao>
      ))}
    </Wrapper>
  );
}

export default CardList;


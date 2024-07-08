import {createContext,useEffect,useState} from "react";

export const ContextVideo= createContext()

const ContextVideoProvider = ({children})=>{
const [video,setVideo]= useState([])
const [openModal, setOpenModal]= useState(false)
const toggleModal =()=>{
  setOpenModal(opendeModal => !openModal)
}
    useEffect(()=>{
        const api= async()=>{
        
        const repostaApi=  await fetch('https://666c940949dbc5d7145e7fe2.mockapi.io/geek/api/aluflix')
        //   .then(resposta=> resposta.json()).then(resposta=>setVideo(resposta))
        const videos =await repostaApi.json()
        setVideo(videos)
        
        }
        api()
      },[])
    return(

    
<ContextVideo.Provider value={{video,openModal,toggleModal}}>
   {children}
</ContextVideo.Provider>
 )
}
export default ContextVideoProvider
import {createContext,useEffect,useState} from "react";

export const ContextVideo= createContext()

const ContextVideoProvider = ({children})=>{
const [video,setVideo]= useState([])

    useEffect(()=>{
        const api= async()=>{
        
        const repostaApi=  await fetch('https://videosaluflix.wiremockapi.cloud/videos')
        //   .then(resposta=> resposta.json()).then(resposta=>setVideo(resposta))
        const videos =await repostaApi.json()
        setVideo(videos)
        
        }
        api()
      },[])
    return(

    
<ContextVideo.Provider value={{video}}>
    {children}
</ContextVideo.Provider>
 )
}
export default ContextVideoProvider
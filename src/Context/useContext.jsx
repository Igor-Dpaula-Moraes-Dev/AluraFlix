import { useContext } from "react"
import { ContextVideo } from "."

export const VideoContexto = ()=>{
    const contexto=useContext(ContextVideo)
    return contexto
}
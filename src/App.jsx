
import { useEffect } from 'react'
import Banner from './Componentes/Banner'
import PaginaPadrao from './Rotas/PaginaPadrao'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { VideoContexto } from './Context/useContext'


function App() {
 
 

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<PaginaPadrao/>}>
        <Route index element={<Banner/>}/>

       

        </Route>
      </Routes>
      
    </BrowserRouter>
 

     
   
  )
}

export default App

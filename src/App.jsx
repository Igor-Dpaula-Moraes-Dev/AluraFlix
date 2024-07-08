

import PaginaPadrao from './Rotas/PaginaPadrao'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Rotas/Home'
import Cadastro from './Rotas/Cadastro'
function App() {
 
 

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<PaginaPadrao/>}>
        <Route index element={<Home/>}/>
        <Route path='cadastro' element={<Cadastro/>} />
        </Route>
      </Routes>
      
    </BrowserRouter>
 

     
   
  )
}

export default App

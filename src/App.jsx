

import PaginaPadrao from './Rotas/PaginaPadrao'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Rotas/Home'
import Cadastro from './Rotas/Cadastro'
import PlayVideo from './Componentes/TelaVideo'
function App() {
 
 

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<PaginaPadrao/>}>
        <Route index element={<Home/>}/>
        <Route path='cadastro' element={<Cadastro/>} />
        <Route path='video/:id' element={<PlayVideo/>} />
        </Route>
      </Routes>
      
    </BrowserRouter>
 

     
   
  )
}

export default App

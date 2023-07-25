import { BrowserRouter, Routes, Route} from 'react-router-dom'
import AuthLayout from './layout/AuthLayout';
import Login from './paginas/Login';
import Registrar from './paginas/Registrar';
import OlvidePassword from './paginas/OlvidePassword';
import ConfirmarCuenta from './paginas/ConfirmarCuenta';
import PaginaPrincipal from './paginas/PaginaPrincipal';
function App() {

    return (
      <BrowserRouter>
        <Routes>
              <Route index element={<PaginaPrincipal/>}/>
              <Route path='/' element = {<AuthLayout />}>
              <Route path="Login"  element={<Login/>}/>
              <Route path ="registrar" element={<Registrar/>}/>
              <Route path ="olvide-password" element={<OlvidePassword/>}/>
              <Route path ="confirmar/:id" element={<ConfirmarCuenta/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }

export default App

import Login from './pages/login';
import Register from './pages/register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App(){
  return(
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>

      </Routes>
    </BrowserRouter>
  )
}

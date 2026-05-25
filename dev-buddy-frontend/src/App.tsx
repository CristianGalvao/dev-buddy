import { BrowserRouter, Routes, Route } from 'react-router-dom';

// PAGES
import Login from './pages/login';
import Register from './pages/register';
import ForgetPassword from './pages/forget_password'

export default function App(){
  return(
    <BrowserRouter>
      <Routes>

        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/forget_password' element={<ForgetPassword/>}/>

      </Routes>
    </BrowserRouter>
  )
}

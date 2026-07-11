import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// PAGES
import Login from './pages/login';
import Register from './pages/register';
import ForgetPassword from './pages/forget_password';
import Home_user from './pages/home_user'; 

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forget_password' element={<ForgetPassword />} />
        
        <Route path='/home' element={<Home_user />}/>
        
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  )
}
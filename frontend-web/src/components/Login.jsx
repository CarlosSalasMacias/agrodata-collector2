import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Login(){
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const navigate=useNavigate();
  const handleSubmit=async(e)=>{
    e.preventDefault();
    const {data}=await axios.post('/api/auth/login',{username,password});
    localStorage.setItem('token',data.token);
    navigate('/dashboard');
  }
  return(
    <form onSubmit={handleSubmit}>
      <h2>Iniciar Sesión</h2>
      <input placeholder='Usuario' value={username} onChange={e=>setUsername(e.target.value)}/>
      <input type='password' placeholder='Contraseña' value={password} onChange={e=>setPassword(e.target.value)}/>
      <button type='submit'>Entrar</button>
    </form>
  );
}
import React from 'react'
import {TextField, Button} from '@mui/material';
import S from './Login.module.css'
import img from '../../assets/senha.svg'

function Login() {
  return (
    <form className={S.login}>
        <div className={S.form}>
            <h2>Login</h2>
        <TextField id="outlined-basic" label="Username" variant="outlined" />
        <TextField id="outlined-basic" label="Password" type="password" variant="outlined"/> 
        <Button variant="outlined">Entrar</Button>
        </div>
        <div className={S.svg}>
           <img src={img} alt="" />
        </div>
    </form>
        
  )
}

export default Login
import React from 'react'
import TextField from '@mui/material/TextField';
import S from './input.module.css'
function Input({texto}) {
  return (
    <div >
        <input type="text" placeholder={texto} className={S.input}/>
    </div>
  )
}

export default Input
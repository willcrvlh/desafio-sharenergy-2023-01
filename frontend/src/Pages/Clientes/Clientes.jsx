import React from 'react'
import CardClientes from '../../Components/CardClientes/CardClientes'
import S from './Cliente.module.css'
function Clientes() {
  return (
    <div >
        <h1 className={S.h1}>Clientes</h1>
        <CardClientes/>
    </div>
  )
}

export default Clientes
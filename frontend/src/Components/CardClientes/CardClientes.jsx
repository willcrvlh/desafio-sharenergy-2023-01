import React from 'react'
import S from './CardCliente.module.css'
function CardClientes() {
  return (
    <div className={S.div}>
        <h3 className={S.nome}>Nome</h3>
        <h4 className={S.email}>Email</h4>
        <p className={S.p}>Telefone</p>
        <p className={S.p}>Endereço</p>
        <p className={S.p}>CPF</p>
    </div>
  )
}

export default CardClientes
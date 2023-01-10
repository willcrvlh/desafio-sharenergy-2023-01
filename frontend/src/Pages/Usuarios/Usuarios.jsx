import React from 'react'
import Button from '../../Components/Buttons/Buttons'
import Card from '../../Components/Card/Card'
import Input from '../../Components/Input/Input'
import S from './Usuarios.module.css'


function Usuarios() {
  return (
    <div className={S.div}>
      <h1 className={S.h1}>BUSCA USUARIOS</h1>
      <div className={S.busca}>
        <Input texto="Digite um Usuario" className={S.input}/>
        <Button text="Buscar"/>
      </div>
      <Card />
    </div>
  )
}

export default Usuarios
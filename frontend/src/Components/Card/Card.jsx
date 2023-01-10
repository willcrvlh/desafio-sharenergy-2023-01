import React from 'react'
import S from './Card.module.css'
function Card() {
  return (
    <div className={S.div}>
      <img src="https://randomuser.me/api/portraits/women/3.jpg" alt="" className={S.img}/>
      <h4 className={S.nome}>Nome</h4>
      <h5 className={S.email}>Email</h5>
      <p className={S.p}>Username</p>
      <p className={S.p}>Idade</p>
    </div>
  )
}

export default Card
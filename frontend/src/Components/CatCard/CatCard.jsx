import React from 'react'
import img from '../../../public/vite.svg'
import S from './CatCard.module.css'
function CatCard() {
  return (
    <div className={S.div}>
        <img src={img} alt="" className={S.image}/>
    </div>
  )
}

export default CatCard
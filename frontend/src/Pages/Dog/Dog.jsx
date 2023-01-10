import React from 'react'
import Buttons from '../../Components/Buttons/Buttons'
import S from './Dog.module.css'
function Dog() {
  return (
    <div className={S.div}>
        <h1 className={S.h1}>TITULO</h1>
        <img src="https://love.doghero.com.br/wp-content/uploads/2018/12/golden-retriever-1.png" alt="" className={S.img} />
        <Buttons text="Refresh"/>
    </div>
  )
}

export default Dog
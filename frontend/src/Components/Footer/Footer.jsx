import React from 'react'
import img from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'
import S from './Footer.module.css'

function Footer() {
  return (
    <footer className={S.footer}>
        <div >
            <a href="https://github.com/willcrvlh"><img src={img} alt="" className={S.github}/></a>     
        </div>
        <div className={S.text}>
        <h3>Projeto realizado per Willian Carvalho da Silva</h3>
        <div className={S.text2}>

        <h4>Todos os direitos reservados</h4>
        </div>
        </div>
        <div >
            <a href="https://www.linkedin.com/in/willcrvlh/"><img src={linkedin} alt="" className={S.linkedin} /></a> 
        </div>
        
    </footer>
  )
}

export default Footer
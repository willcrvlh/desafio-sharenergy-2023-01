import React from 'react';
import { H1 ,  } from './style';
import img  from '../../assets/share.png'
import S from './Header.module.css';
function Header() {
    return (
        <div className={S.header}>
            <div className={S.foto}>
                <a href="/"><img src={img} alt="Logo da empresa" className={S.logo}/>
            </a>
            <H1>Sharenergy</H1>
            </div>
            <div className={S.div}>
                <ul className={S.ul}>
                    <li><a href="/usuarios">Usuarios</a></li>
                    <li> <a href="">HTTP Cat</a></li>
                    <li><a href="">Random Dog</a></li>
                    <li><a href="">Clientes</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header
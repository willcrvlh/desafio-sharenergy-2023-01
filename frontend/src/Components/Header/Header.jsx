import React from "react";
import { H1 } from "./style";
import img from "../../assets/share.png";
import S from "./Header.module.css";
function Header() {
  return (
    <div className={S.header}>
      <div div class="container-fluid" className={S.foto}>
        <a class="navbar-brand" href="#">
          <img
            src={img}
            alt="Logo"
            width="30"
            height="24"
            class="d-inline-block align-text-top"
            className={S.logo}
          />
        </a>
          <H1>Sharenergy</H1>
      </div>
      <div class="collapse navbar-collapse" id="navbarNav" className={S.div}>
        <ul class="navbar-nav" className={S.ul}>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/Usuarios">
              Usuarios
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="">
              HTTP Cat
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Randon Dog
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Clientes
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;

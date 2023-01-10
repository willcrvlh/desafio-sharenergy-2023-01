import React from "react";
import Buttons from "../../Components/Buttons/Buttons";
import CatCard from "../../Components/CatCard/CatCard";
import Input from "../../Components/Input/Input";
import S from "./Cat.module.css";
function Cat() {
  return (
    <div>
      <h1 className={S.h1}>HTTP CAT</h1>
      <div className={S.busca}>
        <Input texto="Digite um status HTTP" />
        <Buttons text="Buscar"/>
      </div>
      <div>
        <CatCard />
      </div>
    </div>
  );
}

export default Cat;

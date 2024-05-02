import Header from "../../components/Header/Header"
import * as S from "./Styled"
import avatar from "../../assets/avatar.png"
// import { useState, useEffect } from "react";

export default function Inicio() {

  
  return (
    <S.Main>
      <Header/>
      <S.Inicio>
        <S.Cima>
          <S.Name>
            <h1>Olá, eu sou a </h1>
            <span>N</span>
            <span>a</span>
            <span>t</span>
            <span>á</span>
            <span>l</span>
            <span>i</span>
            <span>a </span>
            <span>B</span>
            <span>a</span>
            <span>r</span>
            <span>r</span>
            <span>o</span>
            <span>s</span>
            <p>Desenvolvedora Front-End</p>
          </S.Name>
          <S.Banner>
            <a href="https://github.com/NatBarros" target="_blank"><img src={avatar} alt="Minha foto de rosto"/></a>
          </S.Banner>
        </S.Cima>
        <S.Baixo>
        <S.Frase>A programação é uma forma de arte digital, onde cada algoritmo é uma pincelada de criatividade.</S.Frase>
        </S.Baixo>
      </S.Inicio>  
    </S.Main>
  )
}

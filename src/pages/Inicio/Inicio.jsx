import Header from "../../components/Header/Header"
import * as S from "./Styled"
import banner from "../../assets/banner.png"

export default function Inicio() {
  return (
    <S.Main>
      <Header/>
      <S.Inicio>
        <S.Name>
          <h1>Olá, eu sou a</h1>
          <span>Natália Barros :)</span>
          <p>Desenvolvedora Front-End</p>        
        </S.Name>
        <S.Box>
          <h2>A programação é uma forma de arte digital, onde cada algoritmo é uma pincelada de criatividade.</h2>
        </S.Box>
      </S.Inicio>
      <S.Banner>
      <a href="https://github.com/NatBarros" target="_blank"><img src={banner} alt="Minha foto de rosto"/></a>
      </S.Banner>
    </S.Main>
  )
}

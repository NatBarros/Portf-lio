import Header from "../../components/Header/Header"
import * as S from "./Styled"
import prime from "../../assets/prime.png"
import ritmo from "../../assets/ritmo.png"
import selfcare from "../../assets/selfcare.png"
import mcdonalds from "../../assets/mcdonalds.png"
import Carrosel from "react-elastic-carousel"


export default function Projetos() {
  return (
    <S.Main>
        <Header/>
        <S.Projetos>
          <h1>Projetos</h1>
          <S.Lista>
            <Carrosel>
            <figure>
            <img src={mcdonalds} alt="imagem do projeto mcdonalds"/>
              <p>HTML + CSS + JS + REACT</p>
            </figure>
            <figure>
              <img src={ritmo} alt="imagem do projeto no ritmo da batida"/>
              <p>HTML + CSS</p>
            </figure>
            <figure>
              <img src={selfcare} alt="imagem do projeto selfcare"/>
              <p>HTML + CSS</p>
            </figure>
            <figure>
            <img src={prime} alt="imagem do projeto prime"/>
              <p>HTML + CSS</p>
            </figure>
            </Carrosel>
          </S.Lista>
        </S.Projetos>
    </S.Main>
  )
}

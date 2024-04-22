import Header from "../../components/Header/Header"
import * as S from "./Styled"
import prime from "../../assets/prime.png"
import ritmo from "../../assets/ritmo.png"
import selfcare from "../../assets/selfcare.png"
import mcdonalds from "../../assets/mcdonalds.png"
import Card from "../../components/Card/Card"

export default function Projetos() {
  return (
    <S.Main>
        <Header/>
        <S.Projetos>
            <h1>Projetos</h1>
            <S.Cards>
              <Card imagem={prime} texto={"HTML + CSS"}/>
              <Card imagem={ritmo} texto={"HTML + CSS"}/>
              <Card imagem={selfcare} texto={"HTML + CSS"}/>
              <Card imagem={mcdonalds} texto={"HTML + CSS + REACT + JS"}/>
            </S.Cards>
        </S.Projetos>
    </S.Main>
  )
}

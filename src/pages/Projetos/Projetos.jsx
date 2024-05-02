import Header from "../../components/Header/Header"
import * as S from "./Styled"
import prime from "../../assets/prime.mp4"
import ritmo from "../../assets/ritmo.mp4"
import selfcare from "../../assets/selfcare.mp4"
import mcdonalds from "../../assets/mcdonalds.mp4"
import Carousel from "react-elastic-carousel"
import instagram from "../../assets/instagram.png"
import github from "../../assets/github.png"
import linkedin from "../../assets/linkedin.png"


export default function Projetos() {
  return (
    <S.Main>
        <Header/>
        <S.Projetos>
          <h1>Projetos</h1>
          <S.Lista>
            <Carousel>
            <video controls>
            <source src={mcdonalds} type="video/mp4"/>
            </video>
            <video controls>
            <source src={prime} type="video/mp4"/>
            </video>
            <video controls>
            <source src={ritmo} type="video/mp4"/>
            </video>
            <video controls>
            <source src={selfcare} type="video/mp4"/>
            </video>
            </Carousel>
          </S.Lista>
          <S.Icones>
            <a href="https://www.linkedin.com/in/nataliabarros10/" target="_blank"><img src={linkedin} alt="logo do linkedin"/></a>
            <a href="https://github.com/NatBarros" target="_blank"><img src={github} alt="logo do github"/></a>
            <a href="https://www.instagram.com/natalia10barros/?next=%2F" target="_blank"><img src={instagram} alt="logo do facebook"/></a>
        </S.Icones>
        </S.Projetos>
    </S.Main>
  )
}

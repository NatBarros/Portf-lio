import { Link } from "react-router-dom";
import * as S from "./Styled"
import nat1 from "../../assets/nat1.jpg";
import instagram from "../../assets/instagram.png"
import github from "../../assets/github.png"
import linkedin from "../../assets/linkedin.png"

export default function Header() {
  return (
    <S.Header>
        <S.Logo>
            <img src={nat1} alt="foto da Natália"/>
            <h2>Natália</h2>
            <p>Front-end Developer</p>
        </S.Logo>
        <S.Box>
                <ul>
                    <S.Lista><Link to = "/">Início</Link></S.Lista>
                    <S.Lista><Link to = "/sobre">Sobre mim</Link></S.Lista>
                    <S.Lista><Link to = "/projetos">Projetos</Link></S.Lista>
                </ul>
        </S.Box>
        <S.Icones>
            <a href="https://www.linkedin.com/in/nataliabarros10/" target="_blank"><img src={linkedin} alt="logo do linkedin"/></a>
            <a href="https://github.com/NatBarros" target="_blank"><img src={github} alt="logo do github"/></a>
            <a href="https://www.instagram.com/natalia10barros/?next=%2F" target="_blank"><img src={instagram} alt="logo do facebook"/></a>
        </S.Icones>
    </S.Header>
  )
}

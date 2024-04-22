import { Link } from "react-router-dom";
import * as S from "./Styled"
import fotonat from "../../assets/fotonat.jpeg";
import facebook from "../../assets/facebook.png"
import github from "../../assets/github.png"
import linkedin from "../../assets/linkedin.png"
import { useState } from "react";



export default function Header() {

    const [menu, setMenu] = useState(false);

  return (
    <S.Header>
        {/* <S.Logo>
            <img src={fotonat} alt="foto da Natália"/>
            <h2>Natália</h2>
            <p>Front-end Developer</p>
        </S.Logo> */}
        <S.Box>
            <button onClick={() => setMenu(!menu)}>{menu ? "X" : "☰"}</button>
            <S.Menu>
                {menu && (
                <ul>
                    <S.Text>Bem-vindo(a) ao meu Portfólio!</S.Text>
                    <S.Lista><Link to = "/">Início</Link></S.Lista>
                    <S.Lista><Link to = "/sobre">Sobre mim</Link></S.Lista>
                    <S.Lista><Link to = "/projetos">Projetos</Link></S.Lista>
                </ul>
                )}
            </S.Menu>
        </S.Box>
        {/* <S.Icones>
            <a href="https://www.linkedin.com/in/nataliabarros10/" target="_blank"><img src={linkedin} alt="logo do linkedin"/></a>
            <a href="https://github.com/NatBarros" target="_blank"><img src={github} alt="logo do github"/></a>
            <a href="https://www.facebook.com/profile.php?id=100091791076170" target="_blank"><img src={facebook} alt="logo do facebook"/></a>
        </S.Icones> */}
    </S.Header>
  )
}

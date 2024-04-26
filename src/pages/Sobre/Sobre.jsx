import Header from "../../components/Header/Header"
import * as S from "./Styled"
import html from "../../assets/html.png"
import css from "../../assets/css.png"
import react from "../../assets/react.png"
import js from "../../assets/js.png"


export default function Sobre() {
  return (
    <S.Main>
        <Header/>
        <S.Caixapai>
        <S.Sobre>
            <h1>Sobre mim</h1>
            <p>Comecei a me interessar por programação ao pensar em criar facilidades no trabalho do professor, como o planejamento de aula. Ao tentar pesquisar, vi que nenhuma ferramenta satisfazia minha necessidade, então, fui em busca de aprendizado. Aprendi um pouco sobre a liguagem Ruby, e atualmente, front-end com o curso Vai na Web. Identifiquei-me muito com essa especialização e quero aperfeiçoar meu aprendizado, seguindo esse caminho. Atualmente, sou professora há mais de 10 anos e estou em transição de carreira para a área de front-end. A programação virou minha paixão e estou ansiosa pela minha primeira oportunidade de trabalho! </p>
        </S.Sobre>
        <S.Habilidades>
          <h2>Habilidades</h2>
          <S.Box>
            <img src={html} alt="logo do html" />
            <img src={css} alt="logo do css" />
            <img src={react} alt="logo do react" />
            <img src={js} alt="logo do js" />
          </S.Box>
        </S.Habilidades>
        </S.Caixapai>
    </S.Main>
  )
}
import * as S from "./Styled"


export default function Card(props) {
  return (
    <S.Card>
        <img src={props.imagem} alt="" />
        <h3>{props.texto}</h3>
    </S.Card>
  )
}
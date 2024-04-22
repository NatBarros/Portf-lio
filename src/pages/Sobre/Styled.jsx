import styled from "styled-components";
import css from "styled-components";


const center = css`
  display: flex;
  align-items: center;
  justify-content: center;
  `

export const Main = styled.main`
/* border: solid 1px red; */
/* display: block; */
height: 100vh;
background-color: #13131F;
`

export const Sobre = styled.section`
/* border: solid 3px red; */
padding-top: 7%;
margin-left: 14%;
width: 70%;
height: 50vh;
h1 {
    font-size: 3.2rem;
    font-weight: 500;
    color: #8257E6;
    line-height: 6rem;
    text-align: center;
}
p {
    text-align: justify;
    color: #828282;
    line-height: 2rem;
}
`
export const Habilidades = styled.section`
padding-top: 6rem;
margin-left: 14%;
display: flex;
justify-content: center;
flex-direction: column;
/* border: solid 1px green; */
width: 70%;
h2{
  color: white;
  font-weight: 700;
  text-align: center;
  font-size: 2rem;
}
`
export const Box = styled.div`
height: 20vh;
border: solid 1px blue;
margin-top: 2rem;
display: flex;
justify-content: space-evenly;
align-items: center;
/* img {
  border: solid 1px yellow;
  border-radius: 25% 0 0 0 ;
  width: 6vw;
  transition: 0.3s;
  cursor: pointer;
  
} */
`

/* figure img:hover {
  width: 10vw;
    transform: scale(1.2);
  }
`
export const Figure = styled.figure`
overflow: hidden;
` */
// export const Box = styled.div`
// border: 1px solid;
// img:hover {
//   background-color: blue;
// }
// `

export const Image = styled.img`
overflow: hidden;
transition: transform 0.2s ease;
width: 10vw;
cursor: pointer;
&:hover{
  width: 20vw;
  border: solid 1px orange;
  transform: scale (1.1);
}
`
import styled, { css } from 'styled-components';


const center = css`
  display: flex;
  align-items: center;
  justify-content: center;
  `

export const Main = styled.main`
display: flex;
height: 100vh;
background-color: #13131F;
`
export const Caixapai = styled.section`
${center}
flex-direction: column;
width: 85%;
/* border: solid 1px blue; */
`

export const Sobre = styled.section`

border: solid 3px red;
width: 70%;
height: 55vh;
@media (max-width: 1000px) {
  height: 80vh;
  width: auto;
  }
h1 {
    font-size: 3.2rem;
    font-weight: 500;
    color: #8257E6;
    line-height: 6rem;
    text-align: center;
    @media (max-width: 800px) {
    font-size: 2.5rem;
  }
  @media (max-width: 630px) {
    font-size: 2rem;
  }
}
p {
    text-align: justify;
    color: #828282;
    line-height: 2rem;
    @media (max-width: 800px) {
    font-size: 14px;
  }
  @media (max-width: 630px) {
    font-size: 12px;
  }
}
`
export const Habilidades = styled.section`
/* border: solid 1px yellow; */
/* border: solid 1px green; */
width: 70%;
h2{
  color: white;
  font-weight: 700;
  text-align: center;
  font-size: 2rem;
  @media (max-width: 630px) {
    font-size: 1.4 rem;
  }
}

`
export const Box = styled.div`
border: solid 1px green;
padding-top: 2%;
height: 20vh;
display: flex;
justify-content: space-evenly;
align-items: center;
@media (max-width: 545px) {
    height: 10vh;
  }
img {
  border-radius: 30% 0 0 0 ;
  width: 7vw;
  &:hover {
  cursor: pointer;
  transition: 0.3s;
  transform: scale(1.2);
}
}
`
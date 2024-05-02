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
@media (max-width: 450px) {
    width:100%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`
export const Caixapai = styled.section`
${center}
flex-direction: column;
width: 85%;
height: 100%;
/* border: solid 1px blue; */
@media (max-width: 450px) {
    width: 90%;
    margin-left: 0;
  }

`

export const Sobre = styled.section`
/* border: solid 3px red; */
width: 90%;
@media (max-width: 450px) {
  width: 100%;
  }
h1 {
    font-size: 2.6rem;
    font-weight: 500;
    color: #8257E6;
    line-height: 3rem;
    text-align: center;
    @media (max-width: 800px) {
    font-size: 2.5rem;
  }
  @media (max-width: 770px) {
    font-size: 2rem;
  }
  @media (max-width: 450px) {
    font-size: 1.3rem;
    line-height: 2.5rem;
  }
  @media (max-width: 390px) {
    font-size: 1rem;
    line-height: 1.5rem;
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
    line-height: 1.4rem;
  }
  @media (max-width: 450px) {
    font-size: 12px;
  }
  @media (max-width: 390px) {
    font-size: 11px;
    line-height: 1.3rem;
  }
}
`
export const Habilidades = styled.section`
/* border: solid 1px yellow; */
width: 70%;
margin-top: 5%;
@media (max-width: 1000px) {
  width: 100%;
  height: 30%;
  }
  @media (max-width: 450px) {
 margin-top: 10%;
  }
h2{
  color: white;
  font-weight: 700;
  text-align: center;
  font-size: 2rem;
  @media (max-width: 630px) {
    font-size: 1.4 rem;
  }
  @media (max-width: 450px) {
    font-size: 1.2rem;
  }
}

`
export const Box = styled.div`
/* border: solid 1px green; */
display: flex;
margin-top: 6%;
height: 60%;
justify-content: space-evenly;
align-items: center;
@media (max-width: 450px) {
 margin-top: 4%;
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
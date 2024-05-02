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
justify-content: center;
@media (max-width: 450px) {
    width:100%;
    justify-content: center;
    flex-direction: column;
  }
`

export const Projetos = styled.section`
${center};
justify-content: space-evenly;
flex-direction: column;
border: solid 1px yellow;
width: 85%;
height: 100%;
@media (max-width: 450px) {
    width: 100%;
  }
h1 {
  font-size: 2.6rem;
    font-weight: 500;
    color: #8257E6;
    line-height: 4rem;
    text-align: center;
  @media (max-width: 450px) {
    font-size: 2rem;
    line-height: 2rem;
  }
}

`

export const Lista = styled.div`
 border: solid 2px blue;
width: 90%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 3%;
@media (max-width: 450px) {
   height: 50%;
  }
video {
  width: 90%;
}
`
export const Icones = styled.div`
    @media (max-width: 1300px) {
      display: none;
    }
    @media (max-width: 450px) {
      display: flex;
    }
  img {
    width: 80%;
    max-width: 50px;
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
    &:hover {
        transform: scale(1.2);
}
}
`
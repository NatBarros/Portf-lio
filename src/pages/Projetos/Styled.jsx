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
align-items: center;
justify-content: center;


`
export const Projetos = styled.section`
${center};
flex-direction: column;
align-items: center;
/* border: solid 1px yellow; */
width: 85%;
padding: 2% 0; 
h1 {
  margin-bottom: 5%;
  font-size: 2rem;
  font-weight: 500;
  color: #8257E6;
  line-height: 3rem;
  text-align: center;
}
@media (min-width: 576px) {
    h1 {
      font-size: 2.5rem;
      line-height: 4rem;
    }
  }
@media (min-width: 768px) {
    h1 {
      font-size: 3rem;
      line-height: 4.5rem;
    }
  }
@media (min-width: 992px) {
    h1 {
      font-size: 3.2rem;
      line-height: 6rem;
    }
  }
`

export const Lista = styled.div`
margin-bottom: 8% ;
 /* border: solid 2px blue; */
width: 80vw;
display: flex;
flex-direction: column;
align-items: center; 
img{
  width: 75vw;
  height: auto;
  max-width: 400px;
  @media (min-width: 576px) {
      width: 60vw;
    }

  @media (min-width: 768px) {
      width: 50vw;
    }

  @media (min-width: 992px) {
      width: 40vw;
    }
}
p{ 
color: #8257E6;
font-weight: 500;
font-size: 1.2rem; 
text-align: center;
@media (min-width: 576px) {
      font-size: 1.3rem;
    }

@media (min-width: 768px) {
      font-size: 1.4rem;
    }
  }
`


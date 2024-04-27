import styled from "styled-components";
import css from "styled-components";

const center = css`
  display: flex;
  align-items: center;
  justify-content: center;
  `

export const Main = styled.main`
/* border: solid 1px red; */
display: flex;
height: 100vh;
background-color: #13131F;
  @media (max-width: 450px) {
    width:100%;
    flex-direction: column;
    align-items: center;
  }
`
export const Inicio = styled.section`
/* border: solid 3px red; */
margin-top: 7%;
width: 70%;
  ${center};
@media (max-width: 450px) {
    width: 100%;
    margin-top: 0%;
}
  
`
export const Name = styled.div`
/* border: solid 2px yellow; */
height: 35vh;
text-align: center;
margin-bottom: 2rem; 
@keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
animation: fadeIn 2.5s ease-in-out;
h1 {
    font-size: 2.5rem;
    font-weight: 500;
    color: #F9F9F9;
    line-height: 5.4rem;
    @media (max-width: 630px) {
    /* border: solid 1px green; */
    font-size: 1.5rem;
    line-height: 4rem;
  }
  @media (max-width: 450px) {
   margin-top: 5%;
  }
}

span {
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 5.4rem;
    color: #8257E6;
    @media (max-width: 684px) {
    font-size: 2.5rem;
    line-height: 3rem;
  }
  @media (max-width: 290px) {
    font-size: 2rem;
    line-height: 2.5rem;
  }
}

p {
  margin-top: 8%;
    text-align: center;
    font-weight: 500;
    font-size: 1.5rem;
    color: #7B797C;
    @media (max-width: 586px) {
    font-size: 1.3rem;
  }
  @media (max-width: 290px) {
    /* border: solid 1px green; */
    font-size: 1rem;
  }
}
`

export const Box = styled.div`
border: solid 1px white;
width: 100%;
text-align: center;
margin-top: 15%;
margin-left: 5%;
@media (max-width: 684px) {
    width: 100%;
  }

  @media (max-width: 500px) {
    margin-left: 0;
    margin-top: 0;
  }
@media (max-width: 290px) {
    width: 100%;
  }
  

h2 {
    color: #F9F9F9;
    font-weight: 500;
    line-height: 3rem;
    font-size: 1.5rem;
    /* @media (max-width: 586px) {
    font-size: 1rem;
    line-height: 2rem;
  } */

  @media (max-width: 450px) {
    /* border: solid 1px green; */
    margin-top: 0;
    font-size: 1.1rem;
  }
}
`

export const Banner = styled.section`
/* border: solid 1px white; */
height: 50vh;
margin-top: 8%;
img {
    width: 20vw;
    max-width: 100%;
    border-radius: 80%;
    transition: 0.2s;
    &:hover {
        transform: scale(1.2);
    }
    @media (max-width: 500px) {
      display: none;
    }
}
`
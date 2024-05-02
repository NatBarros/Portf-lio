import styled, { css } from "styled-components";
import keyframes from "styled-components";

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
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`
export const Inicio = styled.section`
/* border: solid 3px red; */
padding-top: 4%;
width: 85%;
height: 100%;
display: flex;
flex-direction: column;
@media (max-width: 450px) {
    width: 100%;
}
`

export const Cima = styled.section`
border: solid 2px blue;
width: 100%;
display: flex;
justify-content: space-evenly;
@media (max-width: 450px) {
    display: flex;
    flex-direction: column;
    align-items: center;
}
`
export const Baixo = styled.section`
border: solid 2px pink;
width: 100%;
margin-top: 5%;
@media (max-width: 450px) {
    margin-top: 0;
  }
`

export const Frase=styled.h2`
text-align: center;
  color: #F9F9F9;
    font-weight: 500;
    line-height: 3rem;
    font-size: 1.5rem;

  @media (max-width: 450px) {
    /* border: solid 1px green; */
    font-size: 1rem;
    line-height: 2rem;
  }

`

export const Name = styled.div`
/* border: solid 2px yellow; */
width: 50%;
height: 50%;
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
@media (max-width: 450px) {
    width: 100%;
    height: 100%;
}
h1 {
    font-size: 3.5rem;
    font-weight: 500;
    color: #F9F9F9;
    line-height: 5.4rem;
    @media (max-width: 784px) {
    /* border: solid 1px green; */
    font-size: 1.5rem;
    line-height: 4rem;
  }
  @media (max-width: 450px) {
    /* border: solid 1px green; */
    font-size: 1.2rem;
    line-height: 2rem;
  }
}

span {
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 5.4rem;
    color: #878787;
    animation: brilho 4s ease-in-out infinite;
    
    @keyframes brilho {
      0% {
        color: #F9F9F9;
        text-shadow: 0 0 20px purple, 0 0 50px purple, 0 0 100px purple;
      }

      90% {
        color: #878787;
        text-shadow: none;
      }
    }
    &:nth-of-type(2) {
      animation-delay: 0.25s;
    }
    &:nth-of-type(3) {
      animation-delay: 0.5s;
    }
    &:nth-of-type(4) {
      animation-delay: 0.75s;
    }
    &:nth-of-type(5) {
      animation-delay: 1s;
    }
    &:nth-of-type(6) {
      animation-delay: 1.25s;
    }
    &:nth-of-type(7) {
      animation-delay: 1.5s;
    }
    &:nth-of-type(8) {
      animation-delay: 1.75s;
    }
    &:nth-of-type(9) {
      animation-delay: 2s;
    }
    &:nth-of-type(10) {
      animation-delay: 2.25s;
    }
    &:nth-of-type(11) {
      animation-delay: 2.5s;
    }
    &:nth-of-type(12) {
      animation-delay: 2.75s;
    }
    &:nth-of-type(13) {
      animation-delay: 3s;
    }
    &:nth-of-type(14) {
      animation-delay: 3.25s;
    }

    @media (max-width: 684px) {
    font-size: 2.5rem;
    line-height: 3rem;
  }

  @media (max-width: 450px) {
    font-size: 1.4rem;
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

  @media (max-width: 450px) {
    font-size: 1rem;
    margin-top: 2%;
  }
}
`
export const Banner = styled.div`
/* border: solid 1px white; */
img {
    width: 25vw;
    animation: pulse 1.6s infinite ease-in-out;
    
    @keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}
    /* @media (max-width: 500px) {
      display: none;
    } */
}
`
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
`
export const Inicio = styled.section`
/* border: solid 3px red; */
margin: 7% 0 0 1% ;
width: 90%;
  height: auto;
  ${center}
@media (max-width: 768px) {
    width: 90vw;
    margin-top: 6%;
}
@media (min-width: 576px) {
    width: 80%;
  }
  
  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 992px) {
    width: 60%;
  }

  @media (min-width: 1200px) {
    width: 50%;
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
    @media (min-width: 576px) {
      font-size: 2rem;
      line-height: 3.5rem;
    }

    @media (min-width: 768px) {
      font-size: 3rem;
      line-height: 4rem;
    }

    @media (min-width: 992px) {
      font-size: 3.5rem;
      line-height: 4.5rem;
    }
}

span {
    font-size: 3.2rem;
    font-weight: 500;
    line-height: 5.4rem;
    color: #8257E6;
}

p {
    text-align: center;
    font-weight: 500;
    font-size: 1rem;
    color: #7B797C;
    @media (min-width: 576px) {
      font-size: 1.2rem;
    }

    @media (min-width: 768px) {
      font-size: 1.4rem;
    }

    @media (min-width: 992px) {
      font-size: 1.6rem;
    }
}
`

export const Box = styled.div`
/* border: solid 1px white; */
padding: 2rem;
width: 100%;
text-align: center;
margin-top: 1rem;
h2 {
    color: #F9F9F9;
    font-weight: 500;
    line-height: 3rem;
    font-size: 1.5rem;
    @media (min-width: 576px) {
      font-size: 1.8rem;
    }

    @media (min-width: 768px) {
      font-size: 2rem;
      line-height: 3rem;
    }

    @media (min-width: 992px) {
      font-size: 2.2rem;
    }
}
`

export const Banner = styled.section`
/* border: solid 1px white; */
height: 50vh;
margin: 12% 3% 0 8%;
img {
    width: 20vw;
    max-width: 100%;
    border-radius: 80%;
    transition: 0.2s;
    &:hover {
        transform: scale(1.2);
    }
    @media (min-width: 576px) {
      width: 60vw;
    }

    @media (min-width: 768px) {
      width: 40vw;
    }

    @media (min-width: 992px) {
      width: 20vw;
    }

}
`
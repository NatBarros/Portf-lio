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
margin: 10% 0 0 5% ;
width: 60vw;
height: 52vh;
${center};
`
export const Name = styled.div`
/* border: solid 2px yellow; */
height: 35vh;
text-align: center;
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
    font-size: 3.2rem;
    font-weight: 500;
    color: #F9F9F9;
    line-height: 5.4rem;
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
    font-size: 1.4rem;
    color: #7B797C;
}
`

export const Box = styled.div`
/* border: solid 1px white; */
padding: 2rem;
width: 100%;
text-align: center;
h2 {
    color: #F9F9F9;
    font-weight: 500;
    line-height: 3rem;
}
`

export const Banner = styled.section`
/* border: solid 1px white; */
height: 50vh;
margin: 12% 0 0 8% ;
img {
    width: 20vw;
    max-width: 100%;
    border-radius: 50%;
    transition: 0.2s;
    &:hover {
        transform: scale(1.2);
    }
}
`
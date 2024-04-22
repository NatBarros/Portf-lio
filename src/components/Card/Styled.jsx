import styled from "styled-components";
import css from "styled-components";

const center = css`
  display: flex;
  align-items: center;
  justify-content: center;
  `

export const Card = styled.div`
    background-color: white;
    width: 22vw;
    height: 50vh;
    border-radius: 20px;
    text-align: center;
    ${center}
    flex-direction: column;
    justify-content: space-around;
    transition: transform 0.3s;
    &:hover {
        transform: scale(1.1);
    }
    img {
        margin-top: -8%;
        width: 8vw ;
    } 
`
import styled,{createGlobalStyle, css} from "styled-components";


export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');
    font-family: "DM Sans", sans-serif;
}
`

const center = css`
  display: flex;
  align-items: center;
  justify-content: center;
  `

export const Header = styled.header`
width: 15vw;
max-width: 300px; 
display: flex;
align-items: center;
flex-direction: column;
background-image: linear-gradient(to left, #8257E6, #13131F);
@media (max-width: 700px) {
    width: 100%; 
}
`

export const Logo = styled.div`
/* border: solid 1px green; */
height: 38vh;
width: 100%;
${center}
flex-direction: column;
justify-content: space-evenly;
color: white;
img  {
    width: 45%;
    max-width: 120px;
    border-radius: 50%;
    @media (max-width: 700px) {
      width: 30%; // Aumenta um pouco em telas menores
    }
}
h2 {
    width: 100%;
    font-size: 2rem;
    /* border: solid 1px red; */
    text-align: center;
    @media (max-width: 600px) {
    font-size: 1.7rem;
}
}
p{
    width: 100%;
    font-size: 1rem;
    /* border: solid 1px red; */
    text-align: center;
}
`

export const Box = styled.nav`
height: 35vh;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
ul{
      width: 100%;
    }

li:nth-child(1){
   border-top: solid 1px white; 
}
a{
 color: white;  
 text-decoration: none;
}
`

export const Lista = styled.li`
 height: 11.5vh;
 display: flex;
align-items: center;
justify-content: center;
border-bottom: solid 1px white;
border-top:${props => props.linha};
a{
    color: white;  
    }
`

export const Icones = styled.div`
height: 29vh;
width: 100%;
display: flex;
align-items: center;
justify-content: space-evenly;
flex-direction: column;

img {
    width: 80%;
    max-width: 50px;
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
    &:hover {
        transform: scale(1.2);
    }
    @media (max-width: 700px) {
      width: 70%;
    }
}
`
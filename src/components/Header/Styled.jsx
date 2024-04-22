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
/* border: solid 3px red; */
height: 12vh;
width: 99.7vw;
background: linear-gradient(to right, #13131F, #8257E6);
position: fixed;
`

// export const Logo = styled.div`
// /* border: solid 1px green; */
// height: 38vh;
// width: 100%;
// ${center}
// flex-direction: column;
// justify-content: space-evenly;
// color: white;
// img  {
//     width: 10vw;
//     border-radius: 50%;
// }
// h2 {
//     width: 100%;
//     font-size: 2rem;
//     /* border: solid 1px red; */
//     text-align: center;
// }
// p{
//     width: 100%;
//     font-size: 1rem;
//     /* border: solid 1px red; */
//     text-align: center;
// }
// `


export const Box = styled.div`
    width: 100%;
    height: 100vh;
    button {
        margin: 1.5% 0 0 4%;
        font-size: 1.5rem;
        border: none;
        background-color: transparent;
        cursor: pointer;
        color: #8257E6;
    }
`
export const Menu = styled.nav`
    margin-top: 1rem;
    height: 100%;
    ul {
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding-top: 5rem;
        width: 100%;
        background-color: #000000A6;
        height: 85vh;
        backdrop-filter: blur(10px);
        animation: fadeIn 500ms;
    }
    a{
    padding-top: 3rem;
    color: white;  
    text-decoration: none;
    font-size: 2.4rem;
    font-weight: 600;
    transition: 0.3s;
    &:hover {
        color: #8257E6;
        transform: scale(1.4)
    }
    }
`
export const Lista = styled.li`
height: 12vh;
width: 100%;
${center}
`
export const Text = styled.h2`
color: #8257E6;
font-weight: 700;
font-size: 2.4rem;
text-align: center;
`

// export const Icones = styled.div`
// /* border: solid 3px yellow; */
// width: 100%;
// height: 31vh;
// ${center}
// flex-direction: column;
// justify-content: space-evenly;
// text-align: center;
// img {
//     width: 3.5vw;
//     border-radius: 50%;
//     transition: all 0.3s ease-in-out;
//     &:hover {
//         transform: scale(1.2);
//     }
// }
// `
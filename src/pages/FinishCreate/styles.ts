import Styled from "styled-components";

export const HomeContainer = Styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    background-color: var(--black-700);
`

export const ImageSide = Styled.div`
    width: 40%;
    background-image: url("https://c0.wallpaperflare.com/preview/159/307/795/burger-food-hamburger-eat.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    opacity: 0.7;
    box-shadow: 2px 2px 5px #00000061;
    @media (max-width: 600px) {
        display: none;
    }
`

export const CardSide = Styled.div`
    width: 60%;
    display: flex;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 600px) {
        width: 100%;
    }
`

export const CardContainer = Styled.div`
    width: 600px;
    display: flex;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4em;
`
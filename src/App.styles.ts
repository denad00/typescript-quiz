import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/jeremy-thomas-space.jpg'

export const GlobalStyle = createGlobalStyle`
    html{
        height: 100%;
    }

    body{
        background-image: url(${BGImage});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    *{
        box-sizing: border-box; 
        font-family: 'Catamaran', sans-serif;
        color: white;
    }

    .option, .start, .next {
        color: black;
    }

`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    >p {
        color: white;
    }

    .score {
        color: white;
        font-size: 2rem;
        margin: 0;
    }

    h1 {
        font-size: 3rem;
    }

    .start, .next {
        cursor: pointer;
        background: linear-gradient(180deg, #fff, #ffcc91);
        border-radius: 25px;
        box-shadow; 0px 5px 10px rgba(0,0,0,0.25);
        height: 80px;
        margin: 20px 0;
        padding: 0 40px;
        font-size: 1.5rem;
    }

    .start {
        max-width: 500px;
    }
`

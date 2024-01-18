import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 1100px;
    background: #ebfeff;
    border-radius: 10px;
    border: 2px solid #0085a3;
    padding: 20px;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.25);

    p {
        font-size: 1.5rem;
        color: black;
    }
`

type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    transtion: all 0.3s ease;
    
    :hover {
        opacity: 0.8;
    }

    button {
        cursor: pointer;
        user-select: none;
        font-size: 1rem;
        width: 100%;
        height: 50px;
        margin: 5px 0;
        background: ${({correct, userClicked}) => 
            correct 
            ? 'linear-gradient(90deg, #56ffa4, #59bc86)' 
            : !correct && userClicked
            ? 'linear-gradient(90deg, #ff5656, #c16868)'
            : 'white'
        };
        border: 3x solid white;
        border-radius: 10px;
        color: white;
    }
`
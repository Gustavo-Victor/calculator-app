import styled from "styled-components"; 

export const InputContainer = styled.div`
    width: 100%; 
    height: 75px; 
    background-color: ${props => props.theme.screenBackground};
    color: ${props => props.theme.otherText ? props.theme.otherText : props.theme.secondaryText};
    display: flex;
    align-items: center;
    justify-content: flex-end; 
    font-size: 24px; 
    width: 80%;
    max-width: 400px;
    border-radius: 0.9rem;
    margin-bottom: 1rem; 

    input {
        width: 100%; 
        height: 100%; 
        border: 0; 
        background-color: inherit;
        display: inline-block; 
        text-align: right;
        padding: 0 10px;
        border-radius: 0.9rem;
        font-size: 1.2rem;
        color: inherit;
        font-weight: 900;
    }

    @media screen and (min-width: 400px) { 
        input {
            font-size: 1.8rem; 
            padding: 0 1.5rem;
        }
    }
`; 
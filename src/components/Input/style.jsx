import styled from "styled-components"; 

export const InputContainer = styled.div`
    width: 100%; 
    height: 75px; 
    background-color: #191F32;
    color: #fff; 
    display: flex;
    align-items: center;
    justify-content: flex-end; 
    font-size: 24px; 

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
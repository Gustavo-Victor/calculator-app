import styled from "styled-components"; 

export const ButtonContainer = styled.button`
    font-size: 13px; 
    padding: 6px 12px; 
    border-radius: 0.25rem;
    color: #222; 
    background-color: #ECE4DD;
    color:  #474747; 
    font-weight: 900;
    height: auto; 
    min-height: 50px;
    cursor: pointer;

    &.equal {
        background-color: #D13F30; 
        color: #fff; 
    }

    &.reset {
        background-color: #647298; 
        color: #fff; 
    }

    &.equal, &.reset {
        grid-column: span 2;
    }


    @media screen and (min-width: 400px) {
        font-size: 1.2rem;
        padding: 10px 20px;
    }
`
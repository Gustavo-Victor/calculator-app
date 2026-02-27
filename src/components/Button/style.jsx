import styled from "styled-components"; 

export const ButtonContainer = styled.button`
    font-size: 14px; 
    padding: 6px 12px; 
    border-radius: 0.25rem;
    color: #222; 
    background-color: #ECE4DD;
    color:  #474747; 
    font-weight: 900;
    height: auto; 
    min-height: 50px;
    cursor: pointer;
    box-shadow: 0 3px 0 #818181;
    transition: all 0.1s ease; 

    &:active {
        transform: translateY(4px); 
        box-shadow: 0 1px 0 #818181; 
    }

    &.equal {
        background-color: #D13F30; 
        color: #fff; 
        box-shadow: 0 3px 0 #aa3427;

        &:active {
            box-shadow: 0 1px 0 #aa3427; 
        }

    }

    &.reset, &.del {
        background-color: #647298; 
        color: #fff; 
        box-shadow: 0 3px 0 #4c5674;

        &:active {
            box-shadow: 0 1px 0 #4c5674;
        }
    }

    &.equal, &.reset {
        grid-column: span 2;
    }


    @media screen and (min-width: 400px) {
        font-size: 1.2rem;
        padding: 10px 20px;
    }
`
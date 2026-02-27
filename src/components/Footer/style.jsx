import { styled } from "styled-components"; 

export const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 1.3rem;
    gap: 0.7rem; 
    
    span {
        color: ${props => props.theme.otherText ? props.theme.otherText : props.theme.secondaryText};
        font-size: 10px;
    }

    a {
        margin-left: 5px;
        cursor: pointer;
        font-weight: bold;
        color: ${props => props.theme.equalKeyBackground};
        font-size: 12px;
    }

`; 

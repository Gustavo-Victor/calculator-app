import styled from "styled-components"; 

export const ButtonContainer = styled.button`
    font-size: 14px; 
    padding: 6px 12px; 
    border-radius: 0.25rem;
    color: ${props => props.theme.mainText}; 
    background-color: ${props => props.theme.regularKeyBackground};
    font-weight: 900;
    height: auto; 
    min-height: 50px;
    cursor: pointer;
    box-shadow: 0 3px 0 ${props => props.theme.regularKeyShadow};
    transition: all 0.1s ease; 

    &:hover {
        background-color: ${props => props.theme.regularKeyHover};
    }

    &:active {
        transform: translateY(4px); 
        box-shadow: 0 1px 0 ;
    }

    &.equal {
        background-color: ${props => props.theme.equalKeyBackground}; 
        color: ${props => props.theme.detailText ? props.theme.detailText : props.theme.secondaryText}; 
        box-shadow: 0 3px 0 ${props => props.theme.equalKeyShadow};

        &:active {
            box-shadow: 0 1px 0 ${props => props.theme.equalKeyShadow}; 
        }

        &:hover {
            background-color: ${props => props.theme.equalKeyHover};
        }

    }

    &.reset, &.del {
        background-color: ${props => props.theme.clearKeyBackground}; 
        color: #fff; 
        box-shadow: 0 3px 0 ${props => props.theme.clearKeyShadow};

        &:active {
            box-shadow: 0 1px 0 ${props => props.theme.clearKeyShadow};
        }

        &:hover {
            background-color: ${props => props.theme.clearKeyHover};
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
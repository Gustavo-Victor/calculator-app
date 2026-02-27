import { styled } from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between; 
    align-items: flex-end; 
    /* border: 1px solid red;  */
    width: 80%; 
    max-width: 400px;
    margin-bottom: 1.2rem;
    
    .logo { 
        color: ${props => props.theme.otherText ? props.theme.otherText : props.theme.secondaryText};
        font-size: 1.3rem;
        font-weight: 800;
        text-transform: lowercase;
    }
`; 

export const ThemeContainer = styled.div`
    display: flex; 
    align-items: flex-end;
    gap: 1.4rem; 
    color: ${props => props.theme.otherText ? props.theme.otherText : props.theme.secondaryText};

    span {
        text-transform: uppercase;
        font-weight: 400;
        font-size: 0.8rem; 
    }

    .theme-info {
        display: flex;
        flex-direction: column;
        gap: 7px;
    }

    .theme-options {
        display: flex;
        align-items: center;
        gap: 20px;
        padding: 0 4px;

        span {
            cursor: pointer;
            opacity: 0.8;

            &:hover, &.active, &:active {
                opacity: 1;
                font-weight: 500;
            }
        }


    }

    .theme-toggler {
        width: 100%;
        max-width: 70px;
        border-radius: 20px;
        background-color: ${props => props.theme.toggleBackground};
        padding: 4px;
        display: flex; 
        align-items: center;
        gap: 2px;
        justify-content: space-between;
        transition: visibility 0.5s ease;
        
        .theme-toggler-button {
            border: 0;
            width: 13px; 
            height: 13px; 
            border-radius: 100%;
            background-color: ${props => props.theme.equalKeyBackground};
            visibility: hidden;
            cursor: pointer;

            &:hover {
                background-color: ${props => props.theme.equalKeyHover};                
            }
        
            &.active {
                visibility: visible;
            }
        }
    }
`
import styled from "styled-components"; 

export const Container = styled.div`
    width: 100%; 
    height: 100vh;     
    background-color: ${props => props.theme.background}; 
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: all 0.3s ease;
    `; 


export const Content = styled.div`
    background-color: ${props => props.theme.toggleBackground};
    color: ${props => props.theme.secondaryText}; 
    width: 80%; 
    max-width: 400px; 
    padding: 1.3rem; 
    border-radius: 0.9rem;
    display: flex; 
    flex-direction: column;
    gap: 26px; 
`; 


export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    gap: 0.3rem; 

    @media screen and (min-width: 400px) {
        gap: 1rem;
    }
`;
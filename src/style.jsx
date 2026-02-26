import styled from "styled-components"; 

export const Container = styled.div`
    width: 100%; 
    height: 100vh;     
    background-color: #3B4664; 
    display: flex;
    align-items: center;
    justify-content: center;
`; 


export const Content = styled.div`
    background-color: #252D44;
    color: #fff; 
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
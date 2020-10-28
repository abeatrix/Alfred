import styled from 'styled-components';

export const FeaturesContainer = styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: black;

    @media screen and (max-width: 800px){
        height: 1000;
    };
`

export const FeaturesHeader = styled.h1`
    font-size: 2.5rem;
    color: white;
    margin-bottom: 65px;
    text-align: center;

    @media screen and (max-width: 500px){
        font-size: 2rem;
    };
`

export const FeaturesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`

export const FeaturesP = styled.p`
    font-size: 1rem;
    text-align: center;
`

export const FeaturesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 10px;
    padding: 0 50px;

    @media screen and (max-width: 800px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`
export const FeaturesCard = styled.div`
    background: white;
    display: flex;
    align-items: center;
    border-radius: 10px;
    max-height: 350px;
    padding: 30px;
    box-shadow: none;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        cursor: pointer;
    }
`
export const FeaturesIcon = styled.img`
    height: 150px;
    width: 150px;
    margin-bottom: 10px;
`

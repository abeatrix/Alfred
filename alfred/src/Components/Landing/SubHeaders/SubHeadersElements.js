import styled from 'styled-components';

export const SubContainer = styled.div`
    color: white;
    background-color: ${ ({ lightMode }) => (lightMode ? 'white' : 'black')};
`

export const SubWrapper = styled.div`
    displayed: grid;
    height: 500px;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 5% 25px;
    justify-content: center;
`
export const SubRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 2fr);
    align-items: center;
    ${({imgStart}) => (imgStart ? `grid-template-areas:'col2 col1'` : `grid-template-areas: 'col1 col2'` )};
    text-align: ${({lightMode }) => (lightMode ? 'left' : 'right')};
`

export const SubColumn1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`
export const SubColumn2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`
export const SubItemsWrapper = styled.div`
    max-width: 500px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const SubHeader = styled.p`
    color: green;
    font-size: 15px;
    line-height: 15px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin-bottom: 15px;
`

export const SubHeading = styled.h1`
    margin-bottom: 25px;
    font-size: 45px;
    line-height: 1.1;
    font-weight: 500;
    color: ${({darkModeText }) => (darkModeText ? 'white' : '#50E68C')};
`
export const SubTitle = styled.p`
    max-width: 500px;
    margin-bottom: 35px;
    font-size: 15px;
    line-height: 25px;
    color: ${({darkModeText }) => (darkModeText ? 'white' : '#50E68C')};
`
export const BtnContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    float: ${({lightMode }) => (lightMode ? 'left' : 'right')};
`

export const ImgWrapper = styled.div`
    max-width: 550px;
    height: 100%;
`

export const Img = styled.img`
    width: 300px;
    height: 300px;
    margin: 10px 0 0 0;
    padding-right: 0;
`
export const SubHeaderBtn = styled.button`
    outline: none;
    border: none;
    cursor: pointer;
    border-radius: 50px;
    background: ${ ({ lightMode }) => (lightMode ? '#50E68C' : 'white')};
    color: black;
    white-space: nowrap;
    padding: 14px 50px;
    font-family: 'Arial Black', cursive;
`

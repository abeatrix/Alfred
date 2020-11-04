import styled from 'styled-components';

export const PageContainer = styled.div`
    color: black;
    background-color: white;
`
export const PageWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const PortSideBarContainer = styled.div`
    flex-basis: 25rem;
    flex-grow: 1;
    width: 30%;
`

export const AddaStockWrapper = styled.div`
    height: 300px;
    width: 70%;
    margin: 50px auto;
    padding: 10px;
    justify-content: center;
    border-radius: 10%;
    border-style: solid ;
    border-width: 1px;
`

export const AddaStockBtnsWrapper = styled.div`
    float: right;
`
export const AddaStockBtn = styled.div`
    margin: auto 10px;
    display: inline;
`

export const PortNotSideBarContainer = styled.div`
    flex-basis: 0;
    flex-grow: 999;
    min-width: 50%;
`

export const DashboardContainer = styled.div`
    displayed: grid;
    height: 100px;
    width: 100%;
    justify-content: center;
    padding: 5%;
    margin: 10px;
`

export const DashboardWrapper = styled.div`
    displayed: grid;
    height: 200px;
    width: 100%;
    justify-content: center;
    background: black;
`

export const PortfolioContainer = styled.div`
    displayed: grid;
    width: 100%;
    justify-content: center;
    padding: 10px 10%;
`

export const PortRow = styled.div`
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

import styled from 'styled-components'

export const HeaderContainer = styled.div`
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 800px;
    position: relative
`
export const HeaderBG = styled.div`
    positionL absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBG = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: black;
    opacity: 50%;
`
export const HeaderContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding 10px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const HeaderH1 = styled.h1 `
    color: white;
    font-size: 100px;
    text-align: center;
    font-family: 'Sarina', cursive;
`
export const HeaderP = styled.p `
    margin-top: 25px;
    color: white;
    flex-direction: column;
    align-items: center;
`

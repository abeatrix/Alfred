import React from 'react'
import { SubContainer, SubWrapper, SubRow, SubColumn1, SubColumn2, SubItemsWrapper, SubHeader, SubHeading, SubTitle, BtnContainer, ImgWrapper, Img } from './SubHeadersElements'

const SubHeaders = (lightMode, id, imgStart, lightModeText, subheaderText, subheadingText, lightText, subtitleText, buttonText, img, alt) => {
    return (

        <SubContainer lightMode={lightMode} id={id}>
            <SubWrapper>
                <SubRow imgStart={imgStart}>
                    <SubColumn1>
                        <SubItemsWrapper>
                            <SubHeader lightModeText={lightModeText}>hi{subheaderText}</SubHeader>
                            <SubHeading>{subheadingText}hi</SubHeading>
                            <SubTitle lightText={lightText}>hi{subtitleText}</SubTitle>
                            <BtnContainer>
                                <button>{buttonText}</button>
                            </BtnContainer>
                        </SubItemsWrapper>
                    </SubColumn1>
                    <SubColumn2>
                        <ImgWrapper>
                            <Img src={img} alt={alt}/>
                        </ImgWrapper>
                    </SubColumn2>
                </SubRow>
            </SubWrapper>
        </SubContainer>

    )
}

export default SubHeaders

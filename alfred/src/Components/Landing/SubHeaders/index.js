import React from "react";
import {
    SubContainer,
    SubWrapper,
    SubRow,
    SubColumn1,
    SubColumn2,
    SubItemsWrapper,
    SubHeader,
    SubHeading,
    SubTitle,
    BtnContainer,
    SubHeaderBtn,
    ImgWrapper,
    Img,
} from "./SubHeadersElements";

const SubHeaders = ({
    lightMode,
    id,
    imgStart,
    lightModeText,
    subheaderText,
    subheadingText,
    lightText,
    subtitleText,
    buttonText,
    darkModeText,
    img,
    alt
}) => {
    return (
        <SubContainer lightMode={lightMode} id={id}>
            <SubWrapper>
                <SubRow imgStart={imgStart} lightMode={lightMode}>
                    <SubColumn1>
                        <SubItemsWrapper>
                            <SubHeader darkModeText={darkModeText}> {subheaderText} </SubHeader>
                            <SubHeading darkModeText={darkModeText}> {subheadingText}</SubHeading>
                            <SubTitle darkModeText={darkModeText}>{subtitleText}</SubTitle>
                            <BtnContainer lightMode={lightMode}>
                                {(buttonText) ? <SubHeaderBtn lightMode={lightMode}>{buttonText}</SubHeaderBtn> : null}
                            </BtnContainer>
                        </SubItemsWrapper>
                    </SubColumn1>
                    <SubColumn2>
                        <ImgWrapper lightMode={lightMode}>
                        <Img src={img} alt={alt} />
                        </ImgWrapper>
                    </SubColumn2>
                </SubRow>
            </SubWrapper>
        </SubContainer>
    );
};

export default SubHeaders;

import React from 'react';
import {FeaturesContainer, FeaturesHeader, FeaturesWrapper, FeaturesCard, FeaturesIcon, FeaturesH2, FeaturesP} from './FeaturesElements'


const Services = () => {
    return (
        <FeaturesContainer id='features'>
            <FeaturesHeader>Features</FeaturesHeader>
            <FeaturesWrapper>
                <FeaturesCard>
                    <FeaturesIcon src='https://www.flaticon.com/svg/static/icons/svg/2534/2534197.svg'/>
                    <FeaturesH2>Portfolio Tracker</FeaturesH2>
                    <FeaturesP></FeaturesP>
                </FeaturesCard>
                <FeaturesCard>
                    <FeaturesIcon src='https://www.flaticon.com/svg/static/icons/svg/2534/2534217.svg'/>
                    <FeaturesH2>Paper Trade</FeaturesH2>
                    <FeaturesP></FeaturesP>
                </FeaturesCard>
                <FeaturesCard>
                    <FeaturesIcon src='https://www.flaticon.com/svg/static/icons/svg/2534/2534215.svg'/>
                    <FeaturesH2>Free to use</FeaturesH2>
                    <FeaturesP></FeaturesP>
                </FeaturesCard>
            </FeaturesWrapper>
        </FeaturesContainer>
    )
}

export default Services

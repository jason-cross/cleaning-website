import React from 'react';
import Icon1 from '../../assets/images/about.svg';
import Icon2 from '../../assets/images/about.svg';
import Icon3 from '../../assets/images/about.svg';
import { 
    ServicesCard, 
    ServicesContainer, 
    ServicesH1, 
    ServicesH2, 
    ServicesIcon, 
    ServicesP, 
    ServicesWrapper 
} from './ServicesElements';

const Services = () => {
    return (
        <ServicesContainer>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Cleaning service 1</ServicesH2>
                    <ServicesP>Cleaning service 1 description</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Cleaning service 2</ServicesH2>
                    <ServicesP>Cleaning service 2 description</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Cleaning service 3</ServicesH2>
                    <ServicesP>Cleaning service 3 description</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Cleaning service 4</ServicesH2>
                    <ServicesP>Cleaning service 4 description</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    );
}

export default Services;
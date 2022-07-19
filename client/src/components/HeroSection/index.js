import React from 'react';
import { 
    HeroBg, 
    HeroContainer, 
    HeroContent, 
    HeroH1, 
    HeroP, 
    VideoBg 
} from './HeroElements';
import Video from '../../assets/videos/home-background.mp4'

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Lia's cleaning</HeroH1>
                <HeroP>
                    I offer affordable cleaning services!
                </HeroP>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
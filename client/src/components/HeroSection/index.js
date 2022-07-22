import React, { useState } from 'react';
import { 
    HeroBg, 
    HeroContainer, 
    HeroContent, 
    HeroH1, 
    HeroP, 
    VideoBg,
    HeroBtnWrapper, 
    ArrowDown
} from './HeroElements';
import { Button } from '../ButtonElement'
import Video from '../../assets/videos/home-background.mp4'

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    };

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Lia the Cleaner</HeroH1>
                <HeroP>
                    I offer affordable cleaning services!
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                        to='about' 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                    >
                        Read More {hover ? <ArrowDown /> : ''}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
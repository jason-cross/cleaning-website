import styled from 'styled-components';

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30 px;
    height: calc(100vh - 80px);
    position: relative;
    z-index: 1;
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 76px;
    font-weight: bold;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 50px;
    };

    @media screen and (max-width: 480px) {
        font-size: 48px;
    };
`;

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 28px;
    font-weight: bold;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 20px;
    };

    @media screen and (max-width: 480px) {
        font-size: 18px;
    };
`;
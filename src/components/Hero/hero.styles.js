import styled from 'styled-components';

import { breakpoints } from '../../fixtures/theme';

export const Container = styled.section`
    height: 60vh;
    width: 100%;
    position: relative;
    padding: max(5vh, 2rem) 0;
    min-height: 150px;
    background-color: #fff;

    @media(max-width: ${breakpoints.sm}) {
        height: 80vh;
    }
`;

export const Wrapper = styled.div`
    height: 100%;
    justify-content: center;
    display: flex;
    gap: 6rem;
    align-items: center;

    @media(max-width: ${breakpoints.sm}) {
        flex-direction: column;
        gap: 2rem;
    }
`;

export const Image = styled.img`
    width: 15rem;
    border-top: 10px solid #000;
    border-left: 10px solid #000;
    border-bottom: 10px solid #1069a0;
    border-right: 10px solid #1069a0;
    border-radius: 100%;

    @media(max-width: ${breakpoints.sm}) {
        width: 10rem;
    }
`;

export const Content = styled.div`
    z-index: 1;
    
    @media(max-width: ${breakpoints.sm}) {
        text-align: center;
    }
`;

export const Title = styled.h1`
    font-size: min( calc( 1rem + 5vw ), 3.5rem );
    margin: 0;
    background: linear-gradient(to right, #000 0%, #1069a0 100%);
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
`;

export const Subtitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 300;
    margin: 0;
    margin-top: 0.5rem;
`;
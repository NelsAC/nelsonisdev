import styled from 'styled-components';

import { breakpoints } from '../../fixtures/theme';

export const Container = styled.div`
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(2, 1fr); 

    @media(max-width: ${breakpoints.sm}) {
        padding: 3rem 0;
        grid-template-columns: repeat(1, 1fr); 
    }
`;

export const Anchor = styled.a`
    position: absolute;
    top: 3rem;
    left: -3rem;
    background: #fff;
    padding: .19rem;
    width: 3rem;
    border-top-right-radius: 100%;
    border-bottom-right-radius: 100%;
    transition: .3s ease;
    z-index:2;

    @media(max-width: ${breakpoints.sm}) {
        left: 0;
    }
`;

export const Item = styled.div`
    position: relative;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        background: #000;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0.9;
        transition: .5s ease;
    }

    &::after {
        content: "${({ title }) => title.title}";
        color: #fff;
        position: absolute;
        display: grid;
        place-items: center;
        font-weight: bold;
        font-size: 2rem;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: .3s ease;
        padding-bot: 1.5rem;
        border-bottom: 3px solid #fff;
    }

    @media(min-width: ${breakpoints.sm}) {
        &:hover:before{
            opacity: 0.3; 
        }
        
        &:hover:after{
            opacity: 0;
        }

        &:hover ${Anchor} {
            transform: translateX(3rem);
        }
    }

`;

export const Image = styled.img`
    height: 300px;
    width: 100%;
    object-fit: cover;
    object-position: center center;
`;


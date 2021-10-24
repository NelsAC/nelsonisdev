import styled from 'styled-components';

import { breakpoints } from '../../fixtures/theme';

export const Container = styled.section`
    width: 100%;
    padding: 4rem 0;

    @media(max-width: ${breakpoints.sm}) {
        padding: 3rem 0;
    }
`;

export const Wrapper = styled.div`
    justify-content: center;
    display: flex;
    gap: 5rem;

    @media(max-width: ${breakpoints.sm}) {
        flex-direction: column;
        gap: 2rem;
    }
`;

export const Content = styled.div`
    width: 60%;

    @media(max-width: ${breakpoints.sm}) {
        width: 100%;
    }
`;

export const Title = styled.h2`
    color: #fff;
    text-shadow: 1px 0 0 #000, 0px 0px 0 #000, 0 1px 0 #000, 0 -1px 0 #000, 1px 1px #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000;   
    width: 40%;
    font-size: min( calc( 1.5rem + 5vw ), 3.8rem );
    align-self: center;
    text-align: center;
    position: relative;

    &:before {
        position: absolute;
        top: -5rem;
        left: 1rem;
        content: "02";
        text-shadow: none;
        color: rgba(0,0,0,.1);
        font-size: 8rem;
    }

    @media(max-width: ${breakpoints.sm}) {
        width: 100%;
    }
`;

export const Span = styled.span`
    color: #000;
    text-shadow: none;
`;
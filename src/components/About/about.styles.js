import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    background: linear-gradient(to right, #00395e 0%, #1069a0 100%);
    padding: 15rem 0;
    position: relative;
    overflow: hidden;

    &:before, &:after {
        background-color: #fff;
        content: '';
        height: 20rem;
        width: 120%;
        position: absolute;
    }

    &:before {
        top: -10rem;
        left: 0;
        transform: rotate(3deg);
    }

    &:after {
        bottom: -10rem;
        left: 0;
        transform: rotate(-3deg);
    }
`;

export const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    gap: 5rem;
`;

export const Content = styled.div`
    width: 60%;
    text-align: center;
`;

export const Subtitle = styled.h3`
    color: #fff;
    font-size: 2.5rem;
    font-weight: bold;
    margin: 0;
`;

export const Paragraph = styled.p`
    color: #fff;
    font-size: 1.2rem;
    line-height: 2;
`;

export const Title = styled.h2`
    color: #1069a0;
    text-shadow: 1px 0 0 #fff, 0px 0px 0 #fff, 0 1px 0 #fff, 0 -1px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;   
    width: 40%;
    font-size: 3.8rem;
    align-self: center;
    text-align: center;
    position: relative;
    order: 1;

    &:after {
        position: absolute;
        top: -5rem;
        right: 1rem;
        content: "01";
        text-shadow: none;
        color: rgba(255,255,255,.1);
        font-size: 8rem;
    }
`;

export const Span = styled.span`
    color: #fff;
    text-shadow: none;
`;
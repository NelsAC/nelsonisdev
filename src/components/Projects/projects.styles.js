import styled from 'styled-components';

export const Container = styled.section`
    width: 100%;
    background: linear-gradient(to left, #00395e 100%, #1069a0 0%);
    padding: 4rem 0;
`;

export const Wrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h2`
    color: #1069a0;
    text-shadow: 1px 0 0 #fff, 0px 0px 0 #fff, 0 1px 0 #fff, 0 -1px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff;   
    width: 100%;
    font-size: 3.8rem;
    text-align: center;
    position: relative;

    &:before {
        position: absolute;
        top: -5rem;
        left: 50%;
        content: "03";
        text-shadow: none;
        color: rgba(255,255,255,.1);
        font-size: 8rem;
        transform: translate(-50%, 0);
    }
`;

export const Span = styled.span`
    color: #fff;
    text-shadow: none;
`;
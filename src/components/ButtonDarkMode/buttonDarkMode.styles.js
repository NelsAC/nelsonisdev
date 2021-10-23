import styled from 'styled-components';

export const Container = styled.div`
    
`;
export const Ball = styled.div`
    width: 2rem;
    height: 2rem;
    position: absolute;
    border-radius: 50%;
    transform: translate(-62%,14%);
    background: #fff;
    transition: transform 0.2s linear;
`;

export const Label = styled.label`
    background: #000;
    display: flex;
    justify-content: space-around;
    width: 5rem;
    height: 2.5rem;
    border-radius: 50px;
    position: relative;
`;

export const Icon = styled.i`
    z-index: 1;
    width: 25px;
    height: 40px;
    display: flex;
    align-items: center;
    transition: .2s linear;

    &:nth-child(1) {
        color: #FBBF24;
    }
    
    &:nth-child(2) {
        color: #727272;
    }
`;

export const CheckBox = styled.input`
    position: absolute;
    opacity: 0;

    &:checked + ${Label} ${Ball} {
        transform: translate(60%,14%);
    }

    &:checked + ${Label} ${Icon}:nth-child(1) {
        color: #727272;
    }
    
    &:checked + ${Label} ${Icon}:nth-child(2) {
        color: #0d419d;
    }
`;
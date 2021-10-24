import styled from 'styled-components';

export const Ball = styled.div`
    width: 1.4rem;
    height: 1.4rem;
    top: 3.9px;
    background: #fff;
    position: absolute;
    border-radius: 100%;
    transition: .2s linear;
`;

export const Button = styled.button`
    background: #000;
    border: none;
    width: 4rem;
    height: 2rem;
    border-radius: 2rem;
    align-items: center;
    display: flex;
    justify-content: space-between;
    position: relative;
`;

export const Icon = styled.i`
    width: 1.2rem;
    z-index: 1;
    transition: .2s linear;
`;
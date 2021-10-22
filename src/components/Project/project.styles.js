import styled from 'styled-components';

export const Container = styled.div`
    max-width: 100%;
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(3, 1fr);
`;

export const Card = styled.div`
    height: 15rem;
    background: url(${({ theme }) => theme.img});
    background-size: cover;
    background-position: center;
    border-radius: 3px;
    position: relative;

    &:nth-child(1) {
        grid-column-start: 1;
        grid-column-end: 3;

    }

    &:nth-child(4) {
        grid-column-start: 2;
        grid-column-end: 4;

    }

    &:nth-child(5) {
        grid-column-start: 1;
        grid-column-end: 4;

    }
`;

export const Content = styled.div`
    background: rgba(0, 0, 0, .8);
    backdrop-filter: blur(1.5px);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    margin: 0;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: .3s;
    opacity: 1;

    &:hover {
        background: none;
        backdrop-filter: none;
        opacity: 0;
    }
`;

export const Title = styled.h5`
    margin: 0;
    padding: .2rem 1rem;
    text-align: center;
    font-size: 2rem;
    color: #fff;
    border-radius: 5px;
    font-weight: normal;
`;

export const Link = styled.a`
    margin: 0;
    opacity: 1;
    position: absolute;
    width: 2rem;
`;
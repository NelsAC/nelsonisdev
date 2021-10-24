import styled from 'styled-components';

export const Container = styled.div`
    width: 7.5rem;
    height: 9.5rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    transition: .3s ease;
    margin: 0 auto;

    &:hover{
        transform: scale(1.05);
    }
`;

export const Anchor = styled.a`
    text-decoration: none;
    flex-grow: 1;
    flex-basis: 8rem;
`;
    
export const Description = styled.h4`
    text-align: center;
    color: #000;
    font-weight: normal;
    margin: 0;
    line-height: 1;
`;


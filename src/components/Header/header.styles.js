import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    background-color: rgba(255,255,255,.6);
    backdrop-filter: blur(20px);
    box-shadow: 0px 1rem 3rem -1rem rgba(16, 105, 160,.1);
    position: sticky;
    border-bottom: 1px solid rgba(16, 105, 160,.2);
    top: 0;
    right: 0;
    left: 0;
    z-index: 9;
`;

export const Wrapper = styled.div`
    display: flex;
    padding: max(.5rem, 2vh) 1.2rem;
    justify-content: space-between;
    align-items: center;
`;

export const Button = styled.button`
`;
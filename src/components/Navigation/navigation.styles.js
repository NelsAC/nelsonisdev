import styled from 'styled-components';

import { breakpoints } from '../../fixtures/theme';

export const Nav = styled.nav`
    display: flex;
    gap: 1rem;

    @media(max-width: ${breakpoints.sm}) {
        display: none;
    }
`;

export const Anchor = styled.a`
    text-decoration: none;
    color: #000;
`;

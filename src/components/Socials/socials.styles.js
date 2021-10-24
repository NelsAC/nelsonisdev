import styled from 'styled-components';

import { breakpoints } from '../../fixtures/theme';

export const Container = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;
  gap: 2rem;

  @media(max-width: ${breakpoints.sm}) {
    justify-content: center;
  }
`;

export const List = styled.li`
  width: 1.6rem;

  & path {
    transition: .3s fill;
  }

  &:hover path {
    fill: ${({ theme }) => theme.color};
  }
`;

export const Item = styled.a`
`;
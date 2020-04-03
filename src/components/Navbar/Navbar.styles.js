import styled from 'styled-components';
import { Link as RawLink } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  display: flex;
`;

export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;
`;

export const ListItem = styled.li`
  margin-right: 26px;
  margin-bottom: 5px;
  &:last-child {
    margin-right: 0;
  }
`;

export const Link = styled(RawLink)`
  color: ${({ theme }) => theme.colors.primary};
  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;      
  }
  &:focus, &:hover {
    color: ${({ theme }) => theme.colors.grayBase};
  }
`;

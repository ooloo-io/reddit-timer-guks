import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  display: flex;
`;

export const NavbarUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style-type: none;

}
`;

export const NavbarLi = styled.li`
  margin-right: 25px;
  margin-bottom: 5px;
  &:last-child{
    margin-right: 0;
    padding-left: 0.1rem;
  }
`;

export const NavbarStyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  &:focus, &:hover, &:visited, &:link, &:active {
      text-decoration: none;
      
  }
  &:focus, &:hover {
    color: ${({ theme }) => theme.colors.grayBase};
  }
`;

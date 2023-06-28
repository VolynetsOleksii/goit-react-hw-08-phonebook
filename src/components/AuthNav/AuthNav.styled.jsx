import styled from 'styled-components';
import { NavLink as StyledLink } from 'react-router-dom';

export const NavLink = styled(StyledLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-size: 20px;
  font-weight: 700;
  color: ${props => props.theme.colors.white};
  transition: ${props => props.theme.transition.cubicBezier};
  &:hover,
  :focus {
    color: ${props => props.theme.colors.lightGray};
  }
`;
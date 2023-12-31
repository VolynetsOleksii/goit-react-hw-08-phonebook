import styled from 'styled-components';

export const Container = styled.div`
  margin: 50px auto;
  padding: 20px;
  width: 320px;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: ${props => props.theme.shadows.shadow};
  h1 {
    margin-top: 0;
    margin-bottom: 10px;
  }
`;
export const Button = styled.button`
  border-radius: 5px;
  border: 1px solid ${props => props.theme.colors.black};
  padding: 4px;
  font-size: 16px;
  text-transform: uppercase;
  color: ${props => props.theme.colors.black};
  :not(:last-child) {
    margin-right: 10px;
  }
  transition: ${props => props.theme.transition.cubicBezier};
  :hover {
    border: 1px solid ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.lightBlue};
    color: ${props => props.theme.colors.white};
  }
  :active {
    border: 1px solid ${props => props.theme.colors.lightBlue};
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.lightBlue};
  }
`;

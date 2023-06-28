import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

export const Button = styled.button`
  font-size: 20px;
  border-radius: 4px;
  font-weight: 700;
  padding: 6px;
  margin-right: 10px;
  border: 1px solid ${p => p.theme.colors.lightGray};
  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.lightBlue};
  transition: ${props => props.theme.transition.cubicBezier};
  &:hover {
    color: ${p => p.theme.colors.white};
    box-shadow: ${props => props.theme.shadows.shadow};
    border: 1px solid ${p => p.theme.colors.white};
    cursor: pointer;
  }
`;

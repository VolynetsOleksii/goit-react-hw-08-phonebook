import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  margin-bottom: 16px;
  background-color: ${props => props.theme.colors.lightBlue};
  box-shadow: ${props => props.theme.shadows.shadow};
  }
`;
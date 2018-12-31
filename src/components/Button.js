import styled, { css } from 'styled-components';

const Button = styled.button`
  background: white;
  border: 2px solid red;
  border-radius: 5px;
  font-size: 20px;
  color: red;
  display: inherit;
  margin: 10px auto;

  ${props => props.primary && css`
    border-color: blue;
    color: blue;
  `}
`;

export default Button

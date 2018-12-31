import React from 'react'
import styled from 'styled-components'
import Button from './Button';

const Title = styled.h1`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  text-align: center;
  color: orangered;
`;

const App = () => {
  return (
    <div>
      <Title>Styled components with React</Title>
      <Button>Click</Button>
      <Button primary>Click</Button>
    </div>
  )
}

export default App

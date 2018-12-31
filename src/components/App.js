import React, { Component } from 'react'
import styled from 'styled-components'
import Button from './Button'
import { ThemeProvider } from 'styled-components'
import LightTheme from '../theme/light'
import DarkTheme from '../theme/dark'

const Title = styled.h1`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  text-align: center;
  color: ${props => props.theme.primaryColor};
  background-color: ${props => props.theme.backgroundColor};
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: LightTheme
    }
    this.handleTheme = this.handleTheme.bind(this)
  }

  handleTheme() {
    this.setState({
      theme: this.state.theme === LightTheme ? DarkTheme : LightTheme
    })
  }

  render() {
    return (
      <div>
        <ThemeProvider theme={this.state.theme}>
          <Title onClick={this.handleTheme}>Styled components with React</Title>
        </ThemeProvider>
        <Button>Click</Button>
        <Button primary>Click</Button>
      </div>
    )
  }
}

export default App

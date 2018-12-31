import React, { Component } from 'react'
import styled from 'styled-components'
import Button from './Button'
import { ThemeProvider } from 'styled-components'
import LightTheme from '../theme/light'
import DarkTheme from '../theme/dark'
import PasswordInput from './PasswordInput'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    border: 1px solid orangered;
  }
`

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
      theme: LightTheme,
      showPassword: false
    }
    this.handleTheme = this.handleTheme.bind(this)
    this.handleTogglePassword = this.handleTogglePassword.bind(this)
  }

  handleTheme() {
    this.setState({
      theme: this.state.theme === LightTheme ? DarkTheme : LightTheme
    })
  }

  handleTogglePassword() {
    this.setState({
      showPassword: !this.state.showPassword
    });
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <ThemeProvider theme={this.state.theme}>
          <Title onClick={this.handleTheme}>Styled components with React</Title>
        </ThemeProvider>
        <Button>Click</Button>
        <Button primary onClick={this.handleTogglePassword}>
          {this.state.showPassword ? 'Hide password' : 'Show password'}
        </Button>
        <PasswordInput showPassword={this.state.showPassword} />
      </div>
    )
  }
}

export default App

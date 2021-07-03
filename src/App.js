import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import logo from './logo.svg'
import GlobalStyle from './Global';

const size = {
  small: 400,
  med: 960,
  large: 1140
}

// Above media queries (pixels)
// const above = Object.keys(size).reduce((acc, label) => {
//   acc[label] = (...args) => css`
//     @media (min-width: ${size[label]}px) {
//       ${css(...args)}
//     }
//   `;
//   return acc;
// }, {});

// Above media queries (rem)
const above = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${size[label] / 16}rem) {
      ${css(...args)}
    }
  `
  return acc
}, {})

// Below media queries (rem)
const below = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label] / 16}rem) {
      ${css(...args)}
    }
  `
  return acc
}, {})

// We must pass className as a prop in order for the Fake component to be aware that CSS is coming in.
const Fake = ({ className }) => (
  <div className={className}>
    <h2>I'm a fake component</h2>
  </div>
)

// CSS Helper (useful for mixins)
// The css function is not necessary if we're using just a string. But it do is necessary when using props or functions in mixins.
const fixedTop = css`
  position: fixed;
  top: ${ ({top}) => top + 'px'};
  left: 0;
`

// const fixedTop = `
//   position: fixed;
//   top: ${({top}) => top} px;
//   left: 0;
// `

const Heading = styled.h1`
  font-size: 2rem;
  ${above.med`
    color: blue;
  `}
`

const color = 'white'

const Button = styled.button`
  padding: 5px 20px;
  border-radius: 4px;
  color: ${color};
  font-size: 2rem;
  border: none;
  background: indigo;
`

const CancelButton = styled(Button)`
  background: tomato;
  ${fixedTop};
`

const AppWrapper = styled.div`
  header {
    background: teal;
    &:hover {
      background: #282c34;
    }
  }
  ${Button} {
    margin-bottom: 2rem;
  }
`

const StyledFake = styled(Fake)`
  h2 {
    color: red;
  }
`

function App () {
  return (
    <AppWrapper>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <Heading>
            Edit <code>src/App.js</code> and save to reload.
          </Heading>
          <StyledFake />
          <Fake />
          <Button>Save</Button>
          <CancelButton top='100'>Cancel</CancelButton>
          <Heading>Heading two</Heading>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
      <GlobalStyle/>
    </AppWrapper>
  )
}

export default App

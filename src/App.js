import logo from './logo.svg'
import './App.css'
import styled from 'styled-components'

const Heading = styled.h1`
  font-size: 2rem;
`

const color = 'white'

const Button = styled.button`
  padding: 5px 10px;
  border-radius: 4px;
  border: none;
  color: ${color};
  font-size: 2rem;
  background: ${({ type }) => (type === 'cancel' ? 'tomato' : 'indigo')};
  
`
const AppWrapper = styled.div`
  header {
    background: teal;
    &:hover {
      background: #282c34;
    }
  }

  .App-logo {
    height: 40vmin;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    .App-logo {
      animation: App-logo-spin infinite 20s linear;
    }
  }

  a {
    color: #61dafb;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
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
        <Button type='cancel'>Cancel</Button>
        <Button type='save'>Save</Button>
        <a
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </AppWrapper>
  )
}

export default App

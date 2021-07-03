import logo from './logo.svg'
import './App.css'
import styled from 'styled-components'


// We must pass className as a prop in order for the Fake component to be aware that CSS is coming in.
const Fake = ({ className }) => (
  <div className={className}>
    <h2>I'm a fake component</h2>
  </div>
)

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
  background: indigo;
  
`
// styled(component) inherits everything from the component in brackets
const CancelButton = styled(Button)`
  background: tomato;
`

const AppWrapper = styled.div`
  header {
    background: teal;
    &:hover {
      background: #282c34;
    }
  }
  
  ${'' /* Other components can be referenced using interpolation */}
  ${Button} {
    margin-bottom: 2rem;
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
        <StyledFake/>
        <Fake/>
        <Button>Save</Button>
        <CancelButton>Cancel</CancelButton>
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

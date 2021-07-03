import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';

const Heading = styled.h1`
  font-size: 2rem;
`;

const Button = styled.button`
  padding: 5px 10px;
  border-radius: 4px;
  border: none;
  color: $white; 
  font-size: 2rem;
  background: ${({ type }) => type === 'cancel' ? 'tomato' : 'indigo'}
`

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Heading>
          Edit <code>src/App.js</code> and save to reload.
        </Heading>
        <Button type="cancel">Cancel</Button>
        <Button type="save">Save</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

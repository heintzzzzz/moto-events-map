import logo from './logo.svg';
import './App.css';
import { requestApi, requestMock } from './utils/common_functions';

import AppFooter from './components/AppFooter/AppFooter';
import Map from '../src/components/Map/Map';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React1111
        </a>
      </header>
      <div className={'AppBody'}>
            <Map
            />
      </div>
      <AppFooter />
    </div>
  );
}

export default App;

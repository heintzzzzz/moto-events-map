import logo from './logo.svg';
import './App.css';
import { requestApi, requestMock } from './utils/common_functions';

import Footer from './components/Footer/Footer';
import Map from '../src/components/Map/Map';
import Header from './components/Header/Header';

function App() {

  return (
    <div className="App">
{/*      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>////////
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
      </header>*/}
      <Header />
      <div className={'AppBody'}>
            <Map
            />
      </div>
      <Footer />
    </div>
  );
}

export default App;

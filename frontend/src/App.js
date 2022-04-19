import logo from './logo.svg';
import './App.css';
import DictionaryAPI from './components/dictionary_api/DictionaryAPI';
import BibleAPI from './components/bible_api/BibleAPI';
import Philosophy from './components/philosophy/Philosophy';
import Math from './components/math/Math';

function App() {
  return (
    <div className="App">

      <DictionaryAPI />
      <BibleAPI />
      <Philosophy />
      <Math />

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
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import DictionaryAPI from './components/dictionary_api/DictionaryAPI';
import BibleAPI from './components/bible_api/BibleAPI';

function App() {
  return (
    <div className="App">

      <DictionaryAPI />
      <BibleAPI />

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

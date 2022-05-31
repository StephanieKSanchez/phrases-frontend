
import './App.css';
import AddPhrase from './components/AddPhrases';
import Phrases from './components/Phrases';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Phrases />
        <AddPhrase />
      </header>
    </div>
  );
}

export default App;
